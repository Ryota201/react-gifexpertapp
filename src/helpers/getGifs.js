
/*Necesitamos la categoría, por lo cual, hay que mandarla como argumento.
Cómo es async esta función directamente no es que regrese los gifs, regresa
una promesa que resuelve la colección de mis imágenes
*/
export const getGifs = async( category ) => {
    //el h3{category} lo mandamos al api por eso aparecen las imágenes que escribimos
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=AjCIRll15uGzfgOAFZlDvUtlSUxJabj7`
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

    return gifs;

}