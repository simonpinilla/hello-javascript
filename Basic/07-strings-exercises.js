
// 1. Concatena dos cadenas de texto

let cadena = "Simón " + "Pinilla"
let cadena2 = "Simón " + "Pinilla"


// 2. Muestra la longitud de una cadena de texto
console.log(cadena.length)

// 3. Muestra el primer y último carácter de un string
console.log(cadena[0])
console.log(cadena[12])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena.toLocaleUpperCase())
console.log(cadena.toLocaleLowerCase())


// 5. Crea una cadena de texto en varias líneas
let variasLineas = `Estas
son varias
lineas`
console.log(variasLineas)

// 6. Interpola el valor de una variable en un string
let interpolarrr = "Javiera Necúl"
console.log( `¡${cadena} y ${interpolarrr}!`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(cadena.replace(/ /g,"-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(cadena.includes("Simón"))

// 9. Comprueba si dos strings son iguales
console.log(interpolarrr === cadena)


// 10. Comprueba si dos strings tienen la misma longitud
console.log(cadena.length === cadena2.length)