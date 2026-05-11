
//Clase 30 - Ejercicios: Bucles
//Vídeo: https://youtu.be/1glVfFxj8a4?t=12732

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i<=20; i++){
console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

 let suma = 0
for (let i = 1;i <=100; i++ ){
    suma += i 
}console.log("La suma es:", suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i<=50;i++){

    if (i%2==0){
        console.log(i)
    }
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres= ['simon', 'javiera','samuel']
for (let nombre in nombres){
    console.log(nombres[nombre])
}
for (const elemento of nombres){
    console.log(elemento)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let miCadena = "Mi nombre es Simon"
const vocales=['a','e','i','o','u']
let numVocales=0
for (const valor of miCadena ){
    if (valor===vocales[0]){
        numVocales+=1
    }else if(valor===vocales[1]){    
        numVocales+=1    
    }else if(valor===vocales[2]){  
        numVocales+=1
    }else if(valor===vocales[3]){
        numVocales+=1
    }else if(valor===vocales[4]){
         numVocales+=1
    } 
}//console.log(numVocales) 


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
const multnum = [3,2,5,2,2]
let sumnum=[]
let pronum=[]
for (let i = 0; i< multnum.length;i++){
    if(i===0){
        sumnum=multnum[i]
        continue 
    } 
    sumnum*=multnum[i]
    pronum=sumnum 
}console.log(sumnum)


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let it = 1
do {
    console.log(`${5} x ${it} = ${5*it}`)
    it++
} while (it<=10);


// 8. Usa un bucle para invertir una cadena de texto
const myString= "Cadena"
let resultCadena=""
let newString=myString.length
for (let i=newString-1;i>=0;i--){
    resultCadena+=myString[i]  
}console.log(resultCadena)


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fib=[]
for (let i =0;i<10;i++){
   if (i==0){
    fib.push(i)
    continue
   }else if(i==1){
    fib.push(i)
    continue
   }
   fib.push(fib[fib.length-1]+fib[fib.length-2])
     
}console.log(fib)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numerosArray=[ 1,200, 0,2,3,10,30,4,10]
let numMayores=[]
for (let valor of numerosArray){
    if(valor>=10){
        numMayores.push(valor)
    } 
}console.log(numMayores)