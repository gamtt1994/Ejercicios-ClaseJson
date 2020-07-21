console.log(data)

/**
 * retorna un objeto Pelicula
 * @param {string} nombre 
 */

const getPeliculasByName = (nombre) => {
  for (let i = 0; i < data.peliculas.length; i++) {
    if (data.peliculas[i].title == nombre) {
      return data.peliculas[i]
    }

  }
  return null
}


let peliculaencontrada = getPeliculasByName("The Outpost")
console.log(peliculaencontrada.title)


//Ejercicio 2
//Peliculas menos votadas
const getMenosVotadas = () => {
  let respuesta = [];
  for (let i = 0; i < data.peliculas.length; i++) {
    if (data.peliculas[i].vote_count < 200) {
      respuesta.push(data.peliculas[i]);
    }
  }
  return respuesta;
};

let pelas = getMenosVotadas();
console.log(pelas);


//Ejercicio3
//funcion que retorna el numero de peliculas cuyos lenguajes originales
//no sean en ingles

const getPeliculasOriginales = () => {
  let respuesta1 = [];
  for (let i = 0; i < data.peliculas.length; i++) {
    if (data.peliculas[i].original_language != "en") {
      respuesta1.push(data.peliculas[i]);
    }
  }
  return respuesta1;
};

let peliculasoriginales = getPeliculasOriginales();
console.log(peliculasoriginales.length);


