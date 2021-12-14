import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ( { setCategories } )  => {

    
    /*const [inputValue, setInputValue] = useState() -> de está forma el estado es undefined,
    por consecuencia si queremos el input value sea un string vacio que así sea.
    */
    const [inputValue, setInputValue] = useState('')


    /*La caja de texto(input) debe tener algún tipo de estado, 
    porque necesito saber lo que la persona esta escribiendo.

    El inputValue por defecto tiene el valor de Hola Mundo
    */

    
    /*Necesitamos extraer el nuevo valor(que esta dentro del target),
    ese valor lo extraemos con una constante, recibimos el evento  en los
    parámetros de la función de flecha    
    */
    const handleInputChange = ( e ) => {
       /*Tenemos que tomar el target value y llamar el setInputValue,
       de esta manera podemos escribir todo lo que queramos
       */
       setInputValue( e.target.value );
    }

    /*Recibimos el event porque voy a colocarselo a algo(form)*/
    const handleSubmit = (e) => {
        /*Para prevenir el comportamiento por defecto del formulario(actualizar la página)*/
        e.preventDefault();

        if ( inputValue.trim().length>2 ){
            //console.log('Submit hecho')
            /*setCategories se puede llamar con un callback que puede ser añadido y lo único 
            que tenemos que hacer es pasarle el inputValue como 2da parámetro
            */
            setCategories( cats => [inputValue, ...cats ] );//1ero el valor que se ingresa en el input, luego los valores antiguos
            /*Borramos el valor para que no haga un doble posteo, mandando un setValue
            comoo vacio*/
            setInputValue('');
        }
    }

   /*El formulario por sí mismo, es el que agrupa todos los elementos o los inputs
    que yo podría tener dentro del mismo, por lo cual, no es necesario tener <> </> 
    en el caso de que tengamos un elemento que agrupe todo lo demás.
   */
    return (
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"   
                    value={ inputValue } //por consecuencia este valor es undefined(línea 42)
                    onChange={ handleInputChange }
                />
            </form>
    )
}

AddCategory.propTypes = {
    //func(función) es requerida
    setCategories : PropTypes.func.isRequired
}
