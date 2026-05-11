/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
console.log("\n--- RESULTADOS DEL EJERCICIO 1 ---");
let newArray= ["Pato", "León", "Perro", "Rana", "Oso"]
console.log(newArray)

// 2. Añade dos más. Uno al principio y otro al final
console.log("\n--- RESULTADOS DEL EJERCICIO 2 ---");
newArray.unshift("Caballo")
console.log(newArray)
newArray.push("Gato")
console.log(newArray)


// 3. Elimina el que se encuentra en tercera posición
console.log("\n--- RESULTADOS DEL EJERCICIO 3 ---");
newArray.splice(2,1)
console.log(newArray)

// 4. Crea un set que almacene cinco libros
console.log("\n--- RESULTADOS DEL EJERCICIO 4 ---");

let libros = new Set(["Don Quijote de la Mancha", "Cien años de soledad", "El Principito", "Orgullo y prejuicio", "Papelucho" ])
console.log(libros)

// 5. Añade dos más. Uno de ellos repetido //truco
console.log("\n--- RESULTADOS DEL EJERCICIO 5 ---");

libros.add("El Señor de los Anillos",)
libros.add("El Señor De los Anillos",)

console.log(libros)


// 6. Elimina uno concreto a tu elección
console.log("\n--- RESULTADOS DEL EJERCICIO 6 ---");

libros.delete("Cien años de soledad")
console.log(libros)


// 7. Crea un mapa que asocie el número del mes a su nombre
console.log("\n--- RESULTADOS DEL EJERCICIO 7 ---");

let myMap = new Map([
    [1,"enero"],
    [2,"febreo"],
    [3,"marzo"],
    [4,"abril"],
    [5,"mayo"],
    [6,"junio"],
    [7,"julio"],
    [8,"agosto"],
    [9,"septiembre"],
    [10,"octubre"],
    [11,"noviembre"],
    [12,"diciembre"],
])
console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log("\n--- RESULTADOS DEL EJERCICIO 8 ---");
console.log(myMap.has(5))
console.log(myMap.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
myMap.set("Verano",["Diciembre","Enero", "Febro"])
console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let autoList=["Lunes","Martes", "Miércoles", "Jueves", "Viernes",]
let pruebaSet = new Set(autoList)
console.log(pruebaSet)
let newMap = new Map()
newMap.set("Lunes","Gym")
newMap.set("Martes","Correr")
newMap.set("Miércoles","Ayuno")
newMap.set("Jueves","Descanso")
newMap.set("Viernes","Saltar")
console.log(newMap)


