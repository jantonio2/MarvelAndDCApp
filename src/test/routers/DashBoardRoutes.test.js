import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { AuthContext } from '../../auth/AuthContext'
import { DashboardRoutes } from '../../routers/DashboardRoutes'

describe('Pruebas en <DashBoardRoutes />', () => {

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      name: 'Antonio',
      logged: true
    }
  }

  test('debe mostrarse correctamente', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.text-info').text().trim()).toBe(contextValue.user.name)
  })
  
})
