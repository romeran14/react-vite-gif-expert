import { GifExpertApp } from "../src/GifExpertApp"
import { waitFor, screen, render, getAllByRole } from "@testing-library/react"


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

      test('debe mostrar renderizada la respuesta de la api', async () => { 
        
        render( <GifExpertApp />)

        await waitFor(
            ()=> expect( screen.getAllByRole('img').length).toBeGreaterThan(0),
            // {
            //     timeout:10 //
            // }
        )
     })
})