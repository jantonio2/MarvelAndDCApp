import { mount } from 'enzyme';
import { MemoryRouter, Route, Router } from 'react-router-dom';
import { HeroScreen } from './../../../components/heroes/HeroScreen';


describe('Pruebas en <HeroScreen />', () => {
  
  test('debe de mostrar el componente redirect si no hay argumentos en el URL', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen />
      </MemoryRouter>
    )

    expect(wrapper.find('Redirect').exists()).toBeTruthy()
  })
  
  test('debe de mostrar un hero si el parametro existe y se encuentra', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-captain']}>
        <Route path="/hero/:heroId" component={HeroScreen} />
      </MemoryRouter>
    )

    expect(wrapper.find('.row').exists()).toBeTruthy()
  })
  
  test('debe de regresar a la pantalla anterio con PUSH', () => {
    
    const historyMock = {
      length:1,
      push:jest.fn(),
      goBack:jest.fn(),
      location:{pathname:'/hero/marvel-captain'},
      listen:jest.fn(),
      createHref:jest.fn(),
      replace:jest.fn()
    }

    const wrapper = mount(
      <Router history={historyMock}>
        <Route path='/hero/:heroId' component={HeroScreen} />
      </Router>
    )

    wrapper.find('button').prop('onClick')()

    expect(historyMock.push).toHaveBeenCalledWith('/')
    expect(historyMock.goBack).not.toHaveBeenCalled()
  })
  
  test('debe de regresar a la pantalla anterio GOBACK', () => {
    
    const historyMock = {
      length:10,
      push:jest.fn(),
      goBack:jest.fn(),
      location:{pathname:'/hero/marvel-captain'},
      listen:jest.fn(),
      createHref:jest.fn(),
      replace:jest.fn()
    }

    const wrapper = mount(
      <Router history={historyMock}>
        <Route path='/hero/:heroId' component={HeroScreen} />
      </Router>
    )

    wrapper.find('button').prop('onClick')()

    expect(historyMock.push).not.toHaveBeenCalled()
    expect(historyMock.goBack).toHaveBeenCalled()
  })

  test('debe de llamar el redirect si el hero no existe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-captainsadasdasda']}>
        <Route path="/hero/:heroId" component={HeroScreen} />
      </MemoryRouter>
    )

    expect(wrapper.text()).toBe('')
  })
  
})
