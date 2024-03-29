import {mount} from 'enzyme'
import { MemoryRouter, Route, Router } from 'react-router-dom'
import { SearchScreen } from '../../../components/search/SearchScreen'

describe('Pruebas en <SearchScreen />', () => {
  test('debe de mostrarse correctmente con valores por defecto', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero')
  })
  
  test('debe de mostrar a Batman y el input con el valor del queryString', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )

    expect(wrapper.find('input').prop('value')).toBe('batman')
    expect(wrapper).toMatchSnapshot()
  })

  test('debe de mostrar un error si no se encuentra el hero', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batmanjshgdu']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )

    expect(wrapper.find('.alert-danger').text().trim()).toBe(`There isn't a hero with batmanjshgdu`)
    expect(wrapper).toMatchSnapshot()
  })
  
  test('debe de llamar el push del history', () => {
    const historyMock = {
      length:10,
      push:jest.fn(),
      goBack:jest.fn(),
      location:{pathname:'/search'},
      listen:jest.fn(),
      createHref:jest.fn(),
      replace:jest.fn()
    }
    const wrapper = mount(
      <Router history={historyMock}>
        <Route path='/search' component={SearchScreen} />
      </Router>
    )

    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchText',
        value: 'batman'
      }
    })

    wrapper.find('form').prop('onSubmit')({
      preventDefault(){}
    })

    expect(historyMock.push).toHaveBeenCalledWith('?q=batman')
  })
  
  
})
