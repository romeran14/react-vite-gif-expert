import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('pruebas en el hook useFetchGifs', () => { 
    
    const category = 'One Punch'

    test('debe regresar el estado inicial', () => { 
        
       const { result } = renderHook(() => useFetchGifs( category ))
       const { images, isLoading } = result.current
       expect( images.length).toBe(0)
       expect( isLoading ).toBeTruthy()
       console.log(result)
    })

    test('debe retornar un arreglo y isLoading es false', async () => { 
        
        const { result } = renderHook(() => useFetchGifs( category ))

        await waitFor(
            ()=> expect( result.current.images.length).toBeGreaterThan(0),
            // {
            //     timeout:10 //
            // }
        )
        const { images, isLoading } = result.current
        expect( images.length).toBeGreaterThan(0)
        expect( isLoading ).toBeFalsy()
        console.log(result)
     })
 })