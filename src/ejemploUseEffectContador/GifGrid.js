//useEffect, me va a permitir a mi poder ejecutar cierto código de manera condicional
import React, { useState, useEffect } from 'react'

/*Recibimos la categoría como argumento*/
export const GifGrid = ({ category }) => {

    const [count, setcount] = useState(0)
    /*Si apreto el botón cambiar, me sigue mandando las peticiones http,
    entonces en el useEffecto en el 2do argumento que le mandamos va a ser
    un arreglo de dependencias, }, [])--> el user se va a disparar solo una única vez,
    a pesar de que cambia el contador(se ejecut mediante un arreglo vacío )
    */
    useEffect( () => {
        getGifs();
    }, [])

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=AjCIRll15uGzfgOAFZlDvUtlSUxJabj7'
        /*Llamamos al endpoint*/
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img =>  {
            /*El return va a hacer lo que va a transformar cada uno de los elementos del arreglo(img),
            retornando un nuevo objeto solo con la información que a mi me interesa
            */
           return {
                id: img.id,
                title: img.title,
                // img.images?, preguntamos si viene las imágenes, entonces que lo utilice 
                url: img.images?.downsized_medium.url
           }
        })

        console.log(gifs)
    }

    return (
        <div>
            <h3> { category } </h3>
            <h3>  { count }</h3>
            <button  onClick={ ()=>  setcount( count +1 ) }></button>
        </div>
    )
}
