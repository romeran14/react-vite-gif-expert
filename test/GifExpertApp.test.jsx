import { GifExpertApp } from "../src/GifExpertApp"
import { screen, render } from '@testing-library/react';

describe('first', () => {
    test('debe mostrar el titulo', () => { 
        render( <GifExpertApp />)
        expect( screen.getByText( 'GifExpertApp') ).toBeTruthy()
      })

     test('renders the AddCategory component', () => {
        const {getByTestId}= render(<GifExpertApp />);

        const addCategory = getByTestId('add-category');
        console.log(addCategory)
        expect(addCategory).toBeDefined();
      });
})