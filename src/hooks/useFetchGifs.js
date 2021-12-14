import { useState, useEffect } from 'react';
import { getGifs  } from '../helpers/getGifs';


/*La categoría mandanda en GifGrid cae en los parámetros como si fueran 
props, pero acá sería category
*/
export const useFetchGifs = ( category ) => {

    /*El estado inicial va a ser un objeto que va a tener un arreglo que va
    a ser vacío, va a ser una data
    */
    const [state, setState] = useState({
        data : [],
        loading: true
    });

    /* Le ponemos efecto al custom hooks
    Colocamos como 2do argumento un arreglo vacío para que solo lo ejecuta una vez.
    
    Después de recibir la categoría como parámetro puedo evaluar únicamente este 
    efecto, cuando la categoría cambia, es decir, la 1era vez que va a cambiar y ahí 
    se va a disparar : }, [category])


    Los efectos no pueden ser async por que esperan algo síncronico, pero perfectamente
    se puede utilizar un then y  tener las imágenes en una función de flecha-->
        getGifs( category )
            .then( imgs => {
                
            })
    */
    useEffect( () => {
        /*Ejecutamos el cuerpo de la petición http para extraer las imágenes.
        En los paréntesis le mandamos la categoría. Cómo no tenemos la categoría en
        ningún lugar, por consecuencia puedo mandarle como argumento a mi 
        useFetchGifts la categoría--> const { loading } = useFetchGifs( category );
        */
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    //false pq ya cargaron las imágenes
                    loading : false
                })
            })

    }, [category])



    return state; //el state es esto: { data:[] , loading: true }

}
