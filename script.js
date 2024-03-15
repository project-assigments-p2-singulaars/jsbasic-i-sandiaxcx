//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log('Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5')


//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

let myString = "Holi";
let myNumber = 8;
let myBoolean = true;
let myNull = null;
let myUndefined = undefined;
let myObject = {
    name: "Sandra",
    age: 29
}
let myArray = [1, 2, [3, 4], 5];

console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myNull);
console.log(myUndefined);
console.log(myObject);
console.log(myArray);


//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí

const postres = ["helado", "tarta", "pastel"]
console.log(postres)

//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí

const coder = {
    nombre: "Sandra",
    edad: 29,
}
console.log(coder)

//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.

//Escribe tu código aquí

console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myNull);
console.log(typeof myArray);
console.log(typeof myBoolean);
console.log(typeof myObject)
console.log(typeof coder)
console.log(typeof postres)



//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let suma = 2 + 2;
console.log(suma)


//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí


let resta = 8 - 3;
console.log(resta)

//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let multiplicacion = 8 * 4;
console.log(multiplicacion)


//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let division = 30 / 4;
console.log(division)


//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí


let variuno = 1;
let varidos = 2;

let comparacionuno = variuno == varidos;
console.log(comparacionuno)

// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

let comparaciondos = variuno != varidos;
console.log(comparaciondos)

//Ejercicio 11: completa el ejercicio
/*
let num1 = 15
let num2 = 20

let comparacion = //Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log(comparacion)
*/
let num1 = 15
let num2 = 20

let comparacion = num1 != num2;
console.log(comparacion);

//Ejercicio 12: completa el ejercicio
/*
let num3 = 1
let num3AsString = "1"

let result = //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result) 
*/

let num3 = 1
let num3AsString = "1"

let result = num3 === num3AsString;

console.log(result)

//Ejercicio 13: completa el ejercicio
/*
let result2 = //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log(result2)
*/

let result2 = num3 == num3AsString;
console.log(result2)

//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí


let nombre = "Sandra";
let apellido = "Ramirez";
let nombrecompleto = "Sandra " + "Ramirez";

console.log(nombrecompleto)


//OPERADORES DE LÓGICA
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

let res =  a < 10 && b > 1;
console.log(res)

let res2 = a < 10 && b < 1;
console.log(res2)

let res3 = a == 5 && b == 5; 
console.log(res3)

let res4 = a == 6 || b == 0;
console.log(res4)

let res5 = a == 0 || b == 3;
console.log(res5)

let res6 = a == 6 && b == 3;
console.log(res6)