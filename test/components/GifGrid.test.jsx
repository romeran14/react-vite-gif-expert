import { GifGrid } from '../../src/components/GifGrid';
import { screen, render } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs')

describe('first', () => { 

    const category = 'One Punch'

    test('debe mostrar el loading inicialmente', () => { 
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        })
        render(<GifGrid category={category}/>)

        expect( screen.getByText('Cargando...'))
        expect( screen.getByText( category))
     })

     test('debe mostrar items cuando se cargan las imagenes', () => { 

        const gifs = [
            {
                id:'ABC',
                title:"Saitama",
                url:"https://localhost/saitama.jpg"
            },
            {
                id:'123',
                title:"Goku",
                url:"https://localhost/goku.jpg"
            },
        ]

        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:true
        })
        render(<GifGrid category={category}/>)
        //screen.debug()
        expect( screen.getAllByRole('img').length).toBe(2)
     })
 })