import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { HeroScreen } from './../../../components/heroes/HeroScreen';


describe('Pruebas en <HeroScreen />', () => {
  
  const wrapper = mount(
    <MemoryRouter initialEntries={['/hero']}>
      <HeroScreen />
    </MemoryRouter>
  )

  test('debe de mostrar el componente redirect si no hay argumentos en el URL', () => {
    expect(wrapper.find('Redirect').exists()).toBeTruthy()
  })
  
})
