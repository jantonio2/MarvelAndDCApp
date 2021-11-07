import { authReducer } from './../../auth/authReducer'
import { types } from './../../types/types';

describe('Pruebas en authReducer', () => {
  test('debe de retornar el estado por defecto', () => {
    const state = authReducer({logged: false}, {})

    expect(state).toEqual({logged: false})
  })

  test('debe de autenticar y colocar el name del usuario', () => {
    const state = authReducer({}, {type: types.login, payload: {name: 'Antonio'}})

    expect(state).toEqual({name: 'Antonio', logged: true})
  })
  
  test('debe de borrar el name del usuario y logged en false', () => {
    const state = authReducer({name: 'Antonio', logged: true}, {type: types.logout})

    // expect(state.logged).toBe(false)
    // expect(state.name).toBeUndefined()
    expect(state).toEqual({logged: false})
  })
  
})
