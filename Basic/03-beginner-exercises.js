// 1. Escribe un comentario en una línea

// Esto es un comentario

// 2. Escribe un comentario en varias líneas

/* Esto 
es un comentario
en varias lineas*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myApellido = "Pinilla"
let myAge = 25
let isDoctor = false
let varibleNoDefinida
let sinValor = null
let numeroGrande = BigInt(312313131232131)
let mySymbol = Symbol("atributo")

// 4. Imprime por consola el valor de todas las variables
console.log(myApellido)
console.log(myAge)
console.log(isDoctor)
console.log(varibleNoDefinida)
console.log(sinValor)
console.log(numeroGrande)
console.log(mySymbol)


// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myApellido)
console.log(typeof myAge)
console.log(typeof isDoctor)
console.log(typeof varibleNoDefinida)
console.log(typeof sinValor)
console.log(typeof numeroGrande)
console.log(typeof mySymbol)


// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myApellido = "oporto"
myAge = 30
isDoctor = true
numeroGrande = 789482423424242n
mySymbol = Symbol("atributo 2")


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myAge = "oprto"
myApellido = 25
isDoctor = 342424242n
numeroGrande = true
mySymbol = null
sinValor = Symbol("añandiendo valor")


// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const nombre = "simon"
const year = 2025
const isFlaite = false
const undefinedconst = undefined
const SinValor = null
const Biginttt = 555555555555555555555555555555555555n
const mySym = Symbol("atributo const")

// 9. A continuación, modifica los valores de las constantes
// cString = "Nuevo valor";        // ❌ Error
// cNumero = 10;                   // ❌ Error
// cBooleano = true;               // ❌ Error
// cUndefined = null;              // ❌ Error
// cNull = 0;                      // ❌ Error
// cBigInt = 1n;                   // ❌ Error
// cSymbol = Symbol("otro");       // ❌ Error
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse