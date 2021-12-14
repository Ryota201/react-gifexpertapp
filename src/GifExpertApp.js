import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//import PropTypes from 'prop-types'

//Componente Padre
const GifExpertApp = props => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Dragon Ball']);    

    /*
    const handleAdd = () =>{
        //setCategories([ 'HunterXHunter', ...categories ]);
        setCategories( cats => [...cats, 'HunterXHunter'] );
    }
    */

    /*A nuestro AddCategory vamos a pasarle una función,
    en este caso es el setCategories y mandamos la referencia
    al setCategories = { setCategories }
    */
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>


            <ol>
                { 
                    /*map me sirve para transformar cada uno de los elementos que están dentro de su arreglo.
                    Esto es como un pequeño ciclo. El map recibe 2 argumentos por defecto, el 1ero es la categoría,
                    el argumento del arreglo, el 2do es el índice.
                    */
                    categories.map( category => (
                        <GifGrid 
                            key = { category }
                            category={  category }
                        />
                    )) /*La key sirve para react sepa cual es el elemento que esta iterando */
                    
                }
            </ol>
        </>
    )
}

/*
GifExpertApp.propTypes = {

}
*/
export default GifExpertApp
