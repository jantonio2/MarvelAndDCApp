import { mount } from 'enzyme'
import { Route, Router } from 'react-router-dom'
import { types } from '../../../types/types'
import { AuthContext } from './../../../auth/AuthContext'
import { LoginScreen } from './../../../components/login/LoginScreen'


describe('Pruebas en <LoginScreen />', () => {

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false
    }
  }

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <LoginScreen />
    </AuthContext.Provider>
  )

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('debe de realizarse el dispatch y la navegación', () => {
    const historyMock = {
      length:1,
      push:jest.fn(),
      goBack:jest.fn(),
      location:{pathname:'/login'},
      listen:jest.fn(),
      createHref:jest.fn(),
      replace:jest.fn()
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <Router history={historyMock}>
          <Route path='/login' component={LoginScreen} />
        </Router>
      </AuthContext.Provider>
    )

    const handleClick = wrapper.find('button').prop('onClick')

    handleClick()

    expect(contextValue.dispatch).toHaveBeenCalledWith({type: types.login, payload: {name: 'Antonio'}})
    expect(historyMock.replace).toHaveBeenCalledWith('/')
    
    localStorage.setItem('lastPath','/dc')
    handleClick()

    expect(historyMock.replace).toHaveBeenCalledWith('/dc')
  })
})
