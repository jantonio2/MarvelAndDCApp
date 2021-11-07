import { mount} from 'enzyme'
import { AuthContext } from '../../auth/AuthContext'
import { AppRouter } from './../../routers/AppRouter'

describe('Pruebas en <AppRouter />', () => {

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false
    }
  }

  test('debe de mostrar login si no esta autenticado', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    )
    
    expect(wrapper).toMatchSnapshot()
  })
  
  test('debe de mostrar el componente de marvel si está autenticado', () => {

    const contextValue = {
      dispatch: jest.fn(),
      user: {
        user: 'Antonio',
        logged: true
      }
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    )

    expect(wrapper.find('.navbar').exists()).toBeTruthy()
  })
  
})
