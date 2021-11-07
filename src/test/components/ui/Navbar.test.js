import { mount } from 'enzyme'
import { MemoryRouter, Router } from 'react-router-dom'
import { AuthContext } from '../../../auth/AuthContext'
import { Navbar } from '../../../components/ui/Navbar'
import { types } from '../../../types/types'

describe('Pruebas en el componente <Navbar />', () => {

  const historyMock = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn()
  }

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      name: 'Antonio',
      logged: true
    }
  }
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  )

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.text-info').text().trim()).toBe(contextValue.user.name)
  })
  
  test('debe de llamar el logout y usar history', () => {
    wrapper.find('button').prop('onClick')()

    expect(contextValue.dispatch).toHaveBeenCalledWith({type: types.logout})
    expect(historyMock.replace).toHaveBeenCalledWith('/login')
  })

  // Otra forma de hacer lo de arriba

  // const mockHistoryReplace = jest.fn()
 
  // jest.mock('react-router-dom', () => ({
  //     ...jest.requireActual('react-router-dom'),
  //     useHistory: () => ({
  //       replace: mockHistoryReplace
  //     })
  //   })
  // )
  
  // test('debe de llamar el logout y usar history (otra forma)', () => {
  //   wrapper.find('button').prop('onClick')(); // same than .simulate('click')
  
  //   expect(contextValue.dispatch).toHaveBeenCalledWith({type: types.logout});
  //   expect(mockHistoryReplace).toHaveBeenCalledWith('/login');
 
  // })
})
