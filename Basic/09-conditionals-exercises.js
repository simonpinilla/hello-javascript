/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = 1
if (nombre==1){
    console.log('Simón')
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let password = '123asd'
if (password == '123asd'){
    console.log('Credenciales correctas')
}else console.log('credenciales incorrectas') 
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number= 1
if (number > 0){
    console.log('El numer es positivo')
}else if (number == 0){
    console.log('El numero es 0')
}else console.log('El numero es negativo')

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad=18
if (edad>=18){
    console.log('Habilitado para votar')
}else console.log('le faltan', 18 - edad,'años para votar')
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

const mensaje = edad == 18 ?  "es mayor de edad" : "es menor de edad"
console.log(mensaje)


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 2
let dayName
switch (mes) {
    
    case 1:
        dayName = "verano"
        break
    case 2:
        dayName = "verano"
        break
    case 3:
        dayName = "otoño"
        break
    case 4:
        dayName = "otoño"
        break
    case 5:
        dayName = "otoño"
        break
    case 6:
        dayName = "invierno"
        break
    case 7:
        dayName = "invierno"
        break
    case 8:
        dayName = "invierno"
        break
    case 9:
        dayName = "primavera"
        break
    case 10:
        dayName = "primavera"
        break
    case 11:
        dayName = "primavera"
        break
    case 12:
        dayName = "verano"
        break
    default:
        dayName = "Número de mes incorrecto"
}console.log('Es', dayName)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch



// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7