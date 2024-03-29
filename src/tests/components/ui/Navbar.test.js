import React from 'react';
import { MemoryRouter, Router } from "react-router-dom"
import { AuthContext } from "../../../auth/AuthContext"
import { NavBar } from "../../../components/ui/NavBar"
import { mount } from 'enzyme'
import { types } from '../../../types/types';



describe('Pruebas en <Navbar />', () => {
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
            logged: true,
            name: 'Pedro'
        }
    }
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <NavBar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    )
    afterEach(() => {
        jest.clearAllMocks()
    })
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.text-info').text().trim()).toBe(contextValue.user.name)
    })

    test('debe llamar el logout y usar el history', () => {
        wrapper.find('button').prop('onClick')()
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        })
        expect(historyMock.replace).toHaveBeenCalledWith('/login')
    })

})