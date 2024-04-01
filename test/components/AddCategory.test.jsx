import { AddCategory } from '../../src/components/AddCategory';
import { screen, fireEvent, render } from '@testing-library/react';

describe('first', () => {
    test('debe cambiar el valor de la caja de texto', () => {
        render(<AddCategory />);
        // expect( container ).toMatchSnapshot();
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama' } });

        expect(input.value).toBe('Saitama');
    })

    test('debe de llamar onNewCategory', () => {
        const inputValue = 'Saitama'
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

                // screen.debug();
                expect( input.value ).toBe('');
                expect( onNewCategory).toHaveBeenCalled();
                expect( onNewCategory).toHaveBeenCalledTimes(1);
                expect( onNewCategory).toHaveBeenCalledWith( inputValue)
    })

    test('no debe de llamar el onNewCategory si el input esta vacio', () => {
        const inputValue = ''
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

                // screen.debug();
                expect( input.value ).toBe('');
                expect( onNewCategory).not.toHaveBeenCalled();
                expect( onNewCategory).toHaveBeenCalledTimes(0);
                expect( onNewCategory).not.toHaveBeenCalledWith( inputValue)
    })
})