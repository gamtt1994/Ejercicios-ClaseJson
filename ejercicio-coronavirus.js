//Ejercicio 1 - hacer suma de los casos
const getCasosPersonasInfectadasTotal = () => {
  let suma = 0;
  for (let i = 0; i < covid.length; i++) {
    suma += covid[i].cases
  }
  return suma;
};

let PersonasInfectadasMundo = getCasosPersonasInfectadasTotal();
console.log(`suma de los casos es : ${PersonasInfectadasMundo}`);

//2
/**
 * Función que retorna un objeto completo de cifras
 * de un pais dado su nombre, en caso no encuentre el pais
 * RETORNAR NULL
 * @param {*} pais 
 */
const getCifrasByNamePais = (pais) => {
  for (let i = 0; i < covid.length; i++) {
    if (covid[i].country == pais) {
      return covid[i]
    }
  }
  return null
}

let cifrasByNamePaisEncontrado = getCifrasByNamePais("Brazil")
console.log(`El pais es ${cifrasByNamePaisEncontrado.country} y total de casos es: ${cifrasByNamePaisEncontrado.todayCases}`);

//Ejercicio3
/**
 * Función que retorna el porcentaje de casos de personas
 * recuperadas "recovered" frente al total de casos en un pais "cases"
 * 
 * Para ello se debe proporcionar el nombre del país.
 * Para buscar un país, se debe hacer uso de la función del
 * ejercicio 2 (OBLIGATORIO)
 * @param {*} pais 
 */

let cifrasByNamePaisEncontrado2 = getCifrasByNamePais("Brazil")
const getPorcentajeDeRecuperadosByNamePais = (pais) => {

  let porcentajepersonasrecup = (cifrasByNamePaisEncontrado2.recovered * 100) / cifrasByNamePaisEncontrado2.cases
  return porcentajepersonasrecup.toFixed(2)

}
let paisencontrado = getPorcentajeDeRecuperadosByNamePais(cifrasByNamePaisEncontrado2.country)
console.log(`el % es : ${paisencontrado}`)
//4

/**
 * Función que retorna un arreglo de todos los países con el siguiente
 * objeto como estructura
 * [{
 *  pais:"nombre del pais",
 *  pruebasRealizadas:50000,
 *  pruebasPositivas:25000,
 *  porcentajePruebas:50
 * }]
 * implica que cada país debe mostrar el porcentaje de casos positivos
 * frente al total de pruebas realizadas
 */
const generarArrayPorcentajeDePruebasPositivas = () => {
  let arregloResultado = [];

  for (let i = 0; i < covid.length; i++) {
    let porcentaje = (covid[i].cases * 100) / covid[i].totalTests;
    let objTemporalPais = {
      pais: covid[i].country,
      pruebasRealizadas: covid[i].totalTests,
      pruebasPositivas: covid[i].cases,
      porcentajePruebas: porcentaje,
    };
    arregloResultado.push(objTemporalPais);
  }
  return arregloResultado;
};

let resultado = generarArrayPorcentajeDePruebasPositivas();
console.log(resultado);



