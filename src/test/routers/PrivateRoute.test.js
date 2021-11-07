import { mount, shallow } from 'enzyme'
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoute } from './../../routers/PrivateRoute';

describe('Pruebas en <PrivateRoute />', () => {

  const props = {
    location: {
      pathname: '/marvel'
    }
  } 

  test('debe de mostrar el componente si está autenticado y guardar localStorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute 
          isAuthenticated={true}
          component={() => <span>Listo!</span>}
          {...props}
        />
      </MemoryRouter>
    )

    expect(wrapper.find('span').exists()).toBeTruthy()
  })
  
})
