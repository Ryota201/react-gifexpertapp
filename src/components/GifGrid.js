//useEffect, me va a permitir a mi poder ejecutar cierto código de manera condicional
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

/*Recibimos la categoría como argumento*/
export const GifGrid = ({ category }) => {


    /*Importamos el custom hooks, almacenamos el objeto.
    Para renombrar un argumento en la desestructuración, 
    ponemos data:images(nombre que le queremos dar).

    Para recapitular simplemente llamamos al custom hooks useFetchGifs,
    el cual hace el trabajo pesado, donde se hace el efecto para que se
    dispare solo cuando cambia la categoría, hace la petición http, 
    tenemos la imágenes, se pone el timeOut intencional para ponerlo un 
    poco más lento y cuando ya se tiene la data, se llama el setState  
    cambiando la información.
    */
    const { data:images,  loading } = useFetchGifs( category );

    return (
        //fragment
        <>
        <h3  className="animate__animated animate__fadeIn"> { category } </h3>

        {/*Con el operador and si el loading es true se evalua el parráfo, 
        si el 1ero nuestro entonces no hace nada
        */}
        { loading && <p className="animate__animated animate__flash" >Loading</p> }
        
        <div className="card-grid">
            {
                images.map( img => (
                    <GifGridItem 
                        key= { img.id }   
                        /*De esta manera estoy mandando cada una de las propiedades de las imágenes,
                        como una propiedad independiente
                        */                      
                        { ...img }
                    />
                ))
            }
        </div>
        </>
    )
}
