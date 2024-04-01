import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('first', () => {
    const url ='https://upload.wikimedia.org/wikipedia/commons/a/ad/Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg'
    const title = 'goku'

    test('debe de hacer match con el snapshot', () => {
        
        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();

    });
    
    test('debe mostrar la imagen con la URL y ALT indicado', () => { 
        render( <GifItem title={title} url={url}/>)
       // screen.debug()
       //expect( screen.getAllByRole('img'))
       const { src } = screen.getByRole('img');
       expect( src ).toBe( url );
     })

     test('debe mostrar el titulo', () => { 
        render( <GifItem title={title} url={url}/>)
        expect( screen.getByText( title) ).toBeTruthy()
      })
})