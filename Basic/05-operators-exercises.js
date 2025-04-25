/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let suma = 3 + 7
let resta = 4 - 2
let multiplicacion = 5 * 3
let division = 5 / 2
let modulo = 5 % 3
let exponente =  4 ** 2

suma++
suma--


console.log(exponente)

// 2. Crea una variable para cada tipo de operación de asignación,

//    que haga uso de las variables utilizadas para las operaciones aritméticas
let variableA = 1;
let variableB = 2;
let variableC = 16;
let variableD = 32;
let variableE = 20;

variableA += suma;       
variableB *= resta;      
variableC %= modulo;     
variableD /= exponente;  
variableE -= resta; 
console.log(variableE)




// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(variableA > variableB)
console.log(variableA != variableB)
console.log(variableD === resta)
console.log(suma <= variableA)
console.log(variableE >= exponente)



// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(variableA < variableB)
console.log(variableA === variableB)
console.log(variableD != resta)
console.log(suma >= variableA)
console.log(resta > resta)



// 5. Utiliza el operador lógico and
console.log(variableA > variableB && variableA != variableB )
console.log(variableD === resta && variableA === variableB)


// 6. Utiliza el operador lógico or
console.log(variableA < variableB || variableA > variableB)
console.log(suma >= variableA || resta > resta)

// 7. Combina ambos operadores lógicos
console.log(variableA > variableB && suma <= variableA || resta > resta )

// 8. Añade alguna negación
console.log(!(variableA > variableB && suma <= variableA || resta > resta ))

// 9. Utiliza el operador ternario
const soyAdulto = true

soyAdulto ? console.log('Soy adulto'): console.log('Soy menor de edad')

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(3 + 4 == 10 - 3 && !(16<suma) )