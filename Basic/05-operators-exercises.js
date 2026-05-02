/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let suma = 1 + 1
let resta = 5 - 1
let multiplicacion = 1 * 2
let division = 8 / 2
let modulo = 1 % 2;
let exponente = 1**2
let incremento = 5
incremento++;
let decremento = 5
decremento--;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

// ==========================================
// EJERCICIO 2: Operaciones de Asignación
// ==========================================
console.log("\n--- RESULTADOS DEL EJERCICIO 2 ---");

// Asignación de suma (+=)
let miSuma = 10;
miSuma += suma; 
console.log("miSuma += suma (10 + 2) =", miSuma); // Debería mostrar 12

// Asignación de resta (-=)
let miResta = 10;
miResta -= resta; 
console.log("miResta -= resta (10 - 4) =", miResta); // Debería mostrar 6

// Asignación de multiplicación (*=)
let miMultiplicacion = 10;
miMultiplicacion *= multiplicacion; 
console.log("miMultiplicacion *= multiplicacion (10 * 2) =", miMultiplicacion); // Debería mostrar 20

// Asignación de división (/=)
let miDivision = 10;
miDivision /= division; 
console.log("miDivision /= division (10 / 0.5) =", miDivision); // Debería mostrar 2.5

// Asignación de módulo (%=)
let miModulo = 10;
miModulo %= modulo; 
console.log("miModulo %= modulo (10 % 1) =", miModulo); // Debería mostrar 0

// Asignación de exponente (**=)
let miExponente = 10;
miExponente **= exponente; 
console.log("miExponente **= exponente (10 elevado a 1) =", miExponente); // Debería mostrar 10

console.log("\n--- RESULTADOS DEL EJERCICIO 3 ---");


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
let num1 = 5
let num2 = 5
console.log("comparacion de igualdad verdadera (num1 == numn2) =" ,num1 == num2 )
let num3 = 7
console.log("comparacion de menor  verdadera (num1 < num3) =" ,num1 < num3 )
console.log("comparacion de mayor  verdadera (num3 > num1) =" ,num3 > num1 )
console.log("comparacion de distinto  verdadera (num3 != num1) =" ,num3 != num1 )
console.log("comparacion de mayor o igual verdadera (num1 >= num2) =" ,num1 >= num2 )




// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("\n--- RESULTADOS DEL EJERCICIO 4 ---");
console.log("comparación falsa menor (num1 < num2) =", num1 < num2)
console.log("comparación falsa mayor (num1 < num2) =", num1 > num2)
console.log("comparación falsa igual (num1 == num3) =", num1 == num3)
console.log("comparación falsa distinto (num1 != num2) =", num1 != num2)
console.log("comparacion de mayor o igual falso (num1 >= num3) =" ,num1 >= num3 )


// 5. Utiliza el operador lógico and
console.log("\n--- RESULTADOS DEL EJERCICIO 5 ---");

console.log(5 < 10 && 15 < 20)


// 6. Utiliza el operador lógico or
console.log("\n--- RESULTADOS DEL EJERCICIO 6 ---");

console.log(5 < 10 || 15 < 20)


// 7. Combina ambos operadores lógicos
console.log("\n--- RESULTADOS DEL EJERCICIO 7 ---");

console.log(5 < 4 && 15 < 20 || 7 > 5)


// 8. Añade alguna negación
console.log("\n--- RESULTADOS DEL EJERCICIO 8 ---");

console.log("esto es una negacion: !5<4 = ", !(5<4))



// 9. Utiliza el operador ternario
console.log("\n--- RESULTADOS DEL EJERCICIO 9 ---");
const haceFrio = false
haceFrio ? console.log("hace mucho frio"): console.log("no hace frio") 


// 10. Combina operadores aritméticos, de comparación y lógicos
console.log("\n--- RESULTADOS DEL EJERCICIO 10 ---");
let pass = "hola";
let nivelUsuario = 4;

// Verificamos: Que la pass sea "hola" Y que (nivel + 1) sea mayor a 5
let puedeAcceder = (pass === "hola") && (nivelUsuario + 1 > 5);

console.log("¿El usuario tiene acceso?:", puedeAcceder); 
// Resultado: true