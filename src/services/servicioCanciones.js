export async function servicioCancionesTop(){


    const URL="https://api.spotify.com/v1/artists/3LY2cnBt6jqLEdJco5NBE2/top-tracks?market=US"

    const PETICION={
        method:"GET",
        headers:{Authorization:"Bearer BQDOiGub1U7-kOiw8LfhfaJLFmzV7as-7ztI2XSUVJuBX_-z-RwUQswWDOBiWj7R-P7qY8_JBKApjsIsIzNpb9Ur566XPNgcANeTeIHyPXPm2wjNF8WgLbl88cuAinoBrKJgSmkD6lFAQLW-WbtwyQj4TbQb_S38ngUVigjW4maBV3-Xjev7T_k"}
    }

    let respuesta=await fetch(URL,PETICION)

    let canciones=await respuesta.json()

    return canciones

}   