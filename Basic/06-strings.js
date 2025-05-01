//String

//Concatenación

let myName = "Javiera"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

//Longitud
console.log(greeting.length)

//Acceso a caracteres
console.log(greeting[1])
console.log(greeting[12])

//metodos comúnes 

console.log(greeting.toLocaleUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Javiera"))
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Simón"))
console.log(greeting.includes("Javiera"))
console.log(greeting.includes("Simón"))
console.log(greeting.includes("Hola"))
console.log(greeting.slice(0, 10))
console.log(greeting.replace("Javiera", "Simón"))


// Temnplates literals (plantillas literales)
 let message = `Hola, este es es 
                     el curso de JavaScript`

console.log(message)

let eamail = "javi.necul@gmail.com"
console.log(`Hola, ${myName}, Tu correo es ${eamail}.!`)




