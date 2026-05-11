/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria
console.log("\n--- RESULTADOS DEL EJERCICIO 1 ---");
// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = 1
if (nombre==1){
    console.log('Simón')
}
console.log("\n--- RESULTADOS DEL EJERCICIO 2 ---");
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let password = '123asd'
if (password == '123asd'){
    console.log('Credenciales correctas')
}else console.log('credenciales incorrectas') 
console.log("\n--- RESULTADOS DEL EJERCICIO 3 ---");
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number= 1
if (number > 0){
    console.log('El numer es positivo')
}else if (number == 0){
    console.log('El numero es 0')
}else console.log('El numero es negativo')

console.log("\n--- RESULTADOS DEL EJERCICIO 4 ---");

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad=19
if (edad>=18){
    console.log('Habilitado para votar')
}else console.log('le faltan', 18 - edad,'años para votar')
console.log("\n--- RESULTADOS DEL EJERCICIO 5 ---");
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

const mensaje = edad >= 18 ?  "es mayor de edad" : "es menor de edad"
console.log(mensaje)

console.log("\n--- RESULTADOS DEL EJERCICIO 6 ---");
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 4
if (mes == 1){
    console.log("Es verano")
}else if (mes == 2){
    console.log("Es verano")
}else if (mes == 3){
    console.log("Es otoño")
}else if (mes == 4){
    console.log("Es otoño")
}else if (mes == 5){
    console.log("Es otoño")
}else if (mes == 6){
    console.log("Es invierno")
}else if (mes == 7){
    console.log("Es invierno")
}else if (mes == 8){
    console.log("Es invierno")
}else if (mes == 9){
    console.log("Es primavera")
}else if (mes == 10){
    console.log("Es primavera")
}else if (mes == 11){
    console.log("Es primavera")
}else if (mes == 12){
    console.log("Es verano")
}else console.log('')

console.log("\n--- RESULTADOS DEL EJERCICIO 7 ---");
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let mesdia = 1
if (mesdia == 1){
    console.log("31 días tiene este mes")
}else if (mesdia == 2){
    console.log("Estamos en febrero el cual tiene 28 días")
}else if (mesdia == 3){
        console.log("31 días tiene este mes")
}else if (mesdia == 4){
        console.log("30 días tiene este mes")
}else if (mesdia == 5){
    console.log("31 días tiene este mes")
}else if (mesdia == 6){
        console.log("30 días tiene este mes")
}else if (mesdia == 7){
    console.log("Es julio el cual tiene 31 días")
}else if (mesdia == 8){
    console.log("31 días tiene este mes")
}else if (mesdia == 9){
    console.log("30 días tiene este mes")
}else if (mesdia == 10){
    console.log("31 días tiene este mes")
}else if (mesdia == 11){
    console.log("30 días tiene este mes")
}else if (mesdia == 12){
    console.log("31 días tiene este mes")
}else console.log('')


// switch


console.log("\n--- RESULTADOS DEL EJERCICIO 8 ---");
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "de" //es (Español), en (Inglés), (Francés), de (Alemán), ja (Japonés)


switch (idioma){
    case "es":
        idioma = "¡Hola!"
        break;
    case "en":
        idioma = "Hi!"
        break;
    case "fr":
        idioma = "Salut!"
        break;
    case "de":
        idioma = "Hallo!"
        break;
    case "ja":
        idioma = "どーも"
        break;
    default: 
        idioma = "idioma no admitivo"
    
}console.log(idioma)

console.log("\n--- RESULTADOS DEL EJERCICIO 9 ---");
// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mess = 3
let dayName
switch (mess) {
    
    case 1:   
    case 2:
    case 12:
        dayName = "verano"
        break 
    case 3:    
    case 4:
    case 5:
        dayName = "otoño"
        break
    case 6: 
    case 7:
    case 8:
        dayName = "invierno"
        break
    case 9:
    case 10:
    case 11:
        dayName = "primavera"
        break
    default:
        dayName = "Número de mes incorrecto"
}console.log('Es', dayName)

console.log("\n--- RESULTADOS DEL EJERCICIO 10 ---");
// 10. Usa un switch para hacer de nuevo el ejercicio 7

let dayinmt = 6
switch (dayinmt){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 días tiene este mes")
        break;
    case 2:
        console.log("28 días tiene este mes")
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 días tiene este mes")
        break;  
    default:
        console.log("ingrese un mes correcto")
    

}
