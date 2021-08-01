import authReducer from "../../auth/authReducer"
import { types } from "../../types/types"


describe('Pruebas en authReducer', () => {
    test('debe retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {})
        expect(state).toEqual({ logged: false })
    })

    test('debe autenticar y colocar el name del usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Facundo'
            }
        }
        const state = authReducer({ logged: false }, action)
        expect(state).toEqual({ logged: true, name: 'Facundo' })
    })
    test('debe borrar el name del usuario y logged en false', () => {
        const action = {
            type: types.logout
        }
        const state = authReducer({ logged: false, name: 'Pedro' }, action)
        expect(state).toEqual({ logged: false })
    })


})