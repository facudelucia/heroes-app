import React from 'react';
import { AuthContext } from '../../auth/AuthContext';
import DashboardRoutes from '../../routers/DashboardRoutes';
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <DashboardRoutes />', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false,
            name: 'Juanito'
        }
    }
    test('Debe mostrarse correctamente el componente', () => {
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