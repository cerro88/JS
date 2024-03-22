// las variables se definen con let y si son contanstes, es decir no cambien
//se usa const
//console.log para imprimir

let mensaje = "Hola mundo";
console.log(mensaje);

let numero = 42;
console.log(numero);

const yo = "Belén";
console.log(yo);

//conatenar las variables
let concatenado = yo + ", dice " + mensaje + " y usa el número " + numero + " en js.";
console.log(concatenado)

// Usando plantillas literales comillas invertidas (backticks) y ${expression} para insertar valores de variables
let concatenadoConPlantillas = `${yo}, ${mensaje}! Tengo el número ${numero}.`;
console.log(concatenadoConPlantillas);