/* Pruebas del video de BOOTCAMP*/
//------------------Instanciar variables------------------

// var miVariable = "freeBootCamp"
// console.log(miVariable)

// var a;
// var b = 2;

// console.log(a);
// console.log(b);

// a = 10;

// console.log(a);

// a = b;
//JavaScript es CaseSensitive
//----------Operaiciones aritméticas----------------

// var sum = 10 + 10;
// console.log(sum);

// var rest = 10 - 5;
// console.log(rest);

// var rest = 5 - 15;
// console.log(rest);

// var producto = 10 * 10;
// console.log(producto);  

// var producto = 10 * 0;
// console.log(producto);

// var division = 10 / 2;
// console.log(division);

// var division = 10 / 0;
// console.log(division);

//-----------Numeros decimales----------------

// var numeroDecimal = 10.5;

// var peso = 79.5;
// //Todas las operaciones validas

//-------------Restos----------------

// var resto = 10 % 3;
// console.log(resto);

//------------Incrementos, decrementos y asignaciones----------------

// var librosComprados = 10;
// console.log(librosComprados);

// //opcion1

// librosComprados = librosComprados + 1;
// console.log(librosComprados);
// librosComprados = librosComprados - 1;
// console.log(librosComprados);
// //opcion2
// //
// librosComprados ++;
// console.log(librosComprados);
// librosComprados --;
// console.log(librosComprados);

// //Also exist the +=. This can variate with the other operators, like *=, /=, %=.
// //It also can be used =+, the order means that the value is added after the operation.


// librosComprados += 5;
// console.log(librosComprados);  
// librosComprados =- 5;


//------------Strings----------------

// var nombre = "Nicolas";
// var apellido = "Vega";

// //Escapar comillas

// var freeBootCamp = "Free \"BootCamp\"";
// console.log(freeBootCamp);

// //Comillas simples

// var freeBootCamp = 'Free "BootCamp"';
// console.log(freeBootCamp);
// var freeBootCamp = "Free \'BootCamp\'";
// console.log(freeBootCamp);

// /* Secuencias de escape

// Codigo | Resultado
// \' | Comilla simple
// \" | Comilla doble
// \\ | Barra invertida
// \n | Nueva línea
// \r | Retorno de carro
// \t | Tabulación
// \b | Retroceso
// \f | Salto de página
// */

// console.log("Esto es un parrafor con un salto de línea \n y aquí sigue el párrafo");

// //Concatenar

// var nombreCompleto = nombre + " " + apellido;
// console.log(nombreCompleto);

// //Concatenar con variables

// var nombreCompleto = "Mi nombre es "
// var presentacion = nombreCompleto + nombre + " " + apellido;
// console.log(presentacion);

// //tamaño de cadenas

// var nombre = "Nicolas";
// console.log(nombre.length);

// //Notación de corchetes

// var lenguaje = "JavaScript";

// /*
// Cadeba :     J  a  v  a  S  c  r  i  p  t
// Posición:    0  1  2  3  4  5  6  7  8  9
// */

// console.log(lenguaje[0]);

// //Inmutabilidad

// var lenguaje = "javaScript";
// console.log(lenguaje);

// lenguaje[0] = "J"; //No se puede cambiar el valor de una cadena
// console.log(lenguaje);

// lenguaje = "JavaScript";
// console.log(lenguaje);

// console.log(lenguaje[0]);
// console.log(lenguaje[1]);
// console.log(lenguaje[2]);
// console.log(lenguaje[3]);
// console.log(lenguaje[4]);
// console.log(lenguaje[5]);
// console.log(lenguaje[6]);
// console.log(lenguaje[7]);
// console.log(lenguaje[8]);
// console.log(lenguaje[9]);

// console.log(lenguaje[10]); //undefined

// //Las cadenas empiezan a contar desde 0

// console.log(lenguaje[lenguaje.length - 1]); //t

// var miCadena = "JavaScript";
// var n = 2;

// console.log(miCadena[miCadena.length - n]);//p


//-------------------Arrays----------------

// var miArreglo = ["Nicolas", 25, true, "Vega"];
// console.log(miArreglo);

// var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
// console.log(estudiantes);

// //Anidados

// var listaDeEstudiantes=[["Nora",97],["Sergio",89],["Rosa",95],["Daniel",92]];
// console.log(listaDeEstudiantes);

// //Acceder a los elementos
// /*
// Arreglo: [Maria, Sergio, Rosa, Daniel]
// Posición:  0       1       2       3
// */
// console.log(estudiantes[0]);

// //Modificar elementos
// var miArreglo= [10, 20, 30, 40];
// miArreglo[0] = 100;

// console.log(miArreglo);

// miArreglo[1] = "Hola";

// miArreglo[2] = [1,2,3];

// console.log(miArreglo);

// //Arreglos multidimensionales

// var miArreglo = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(miArreglo);

// /*
// Arreglo:        [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
// Posición:           0       1       2
// Indices internos:0  1  2    0  1  2   0  1  2  
// */


// console.log(miArreglo[0][0]);
// console.log(miArreglo[0][1]);
// console.log(miArreglo[2][2]);

// //push

// var estaciones = ["Primavera", "Verano", "Otoño",];
// console.log(estaciones);
// estaciones.push("Invierno");//Adds a new element
// console.log(estaciones);

// //pop

// var estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
// console.log(estaciones);
// var estacion = estaciones.pop();//Removes the last element
// console.log(estaciones);
// console.log(estacion);

// //shift

// var estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
// console.log(estaciones);
// var estacion = estaciones.shift();//Removes the first element
// console.log(estaciones);
// console.log(estacion);

// //unshift

// var estaciones = [ "Verano", "Otoño", "Invierno"];
// estaciones.unshift("Primavera");//Adds a new element at the beginning
// console.log(estaciones);

// //miniproject

// var miListaDeContactos = [["Juan", 123456], ["Maria", 654321], ["Pedro", 456789], ["Ana", 987654], ["Luis", 321654]];

// for (var i = 0; i < miListaDeContactos.length; i++){
//     console.log(i+1 + "Nombre: " + miListaDeContactos[i][0]);
//     console.log( "Teléfono: " + miListaDeContactos[i][1]);
// }

//-----------------------FUNCIONES--------------------

// function mostrarMensaje(){
//     console.log("Hola Mundo");    
// }

// mostrarMensaje();

// function sumar(a,b){
//     let suma = a + b;
//     console.log("El resultado es: "+ suma);
// }

// let x = 2;

// sumar(10,20);
// sumar(100,200);
// sumar(x,x);

// function concatenarTresCaenas(cadena1, cadena2, cadena3){
//     let resultado = cadena1 + " " + cadena2 + " " + cadena3;
//     console.log(resultado);
// }

// concatenarTresCaenas("Hola", "como", "estas");

//--------------------Variable global y local----------------

// var miVariableGlobal = "Soy una variable global";

// console.log(miVariableGlobal);

// function miFuncion(){
//     var miVariableLocal = "Soy una variable local";
//     console.log(miVariableLocal);
//     console.log(miVariableGlobal);
// }

// var miNombre = "Nicolas";

// function mostrarMiNombre(){
//     var miNombre = "Juan";
//     console.log(miNombre);  
// }

// //-----Return-----

// function sumarR(a,b){
//     return a + b;
// }

// function sumar(a,b){
//     console.log(a + b);
// }

// let resultado = sumarR(10,20);
// console.log(resultado);
// //Las funciones retornan un valor predefinidio UNDEFINED
// resultado = sumar(10,20);
// console.log(resultado);


// //Proyecto

// function inPila(arr, element){
//     arr.unshift(element);
// }

// function outPila(arr){
//     return arr.shift();
// }

// let pila = [1,2,3,4,5];

// inPila(pila, 6);
// console.log(JSON.stringify(pila));

// let elemento = outPila(pila);
// console.log(elemento);
// console.log(JSON.stringify(pila));

//------------------Booleanos---------------

// let esVerdadero = true;//True es invalido en JavaScript, solo es valido true
// let esFalso = false;

// console.log(esVerdadero);
// console.log(esFalso);

// console.log(5 == 5);
// console.log(5 == 6); //Compara elementos sin importar el tipo
// console.log(5 != 6);
// console.log(5 != 5);
// console.log(5 === 5);
// console.log(5 === "5"); //Compara elementos con el mismo tipo
// console.log(5 !== "5");
// //Nota: == y === son operadores de igualdad, != y !== son operadores de desigualdad
// //Nota: == y != son operadores de igualdad débil, === y !== son operadores de igualdad fuerte
// //Nota: no comparar arrays con == o ===, ya que se comparan como objetos, no comparan sus elementos.

// console.log(5 > 3);
// console.log(5 < 3);
// console.log(5 >= 5);
// console.log(5 <= 5);

//------------------Operadores logicos----------------

// let esVerdadero = true;
// let esFalso = false;

// console.log(esVerdadero && esFalso);    //AND
// console.log(esVerdadero || esFalso);    //OR
// console.log(!esVerdadero);              //NOT
// console.log(!esFalso);                  
//  //Tener en cuenta las tablas de verdad

//------------------Condicionales----------------

//Lo regular en otros lenguajes se usa if, else if, else

// let esVerdadero = true;

// if(esVerdadero){
//     console.log("Es verdadero");
// }

// let esFalso = false;

// if(esFalso){
//     console.log("Es verdadero");
// }

// let x = 10;

// if(x > 5 && x < 20){
//     console.log("Es mayor a 5");
// }

// let estacion = "Invierno";

// if(estacion === "Primavera"){
//     console.log("Flores");
// }else if(estacion === "Invierno"){
//     console.log("Nieve");
// }

// function esPar(numero){
//     if(numero % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(esPar(10));

// function interpretarIMC(imc){
//     if(imc < 18.5){
//         return "Bajo peso";
//     }else if(imc >= 18.5 && imc <= 24.9){
//         return "Normal";
//     }else if(imc >= 25 && imc <= 29.9){
//         return "Sobrepeso";
//     }else{
//         return "Obesidad";
//     }
// }

// console.log(interpretarIMC(20));
// console.log(interpretarIMC(30));
// console.log(interpretarIMC(15));


// function puntajeDeGolf(par, golpes){
//     if(golpes === 1){
//         return "Hoyo en uno";
//     }else if(golpes <= par - 2){
//         return "Eagle";
//     }else if(golpes === par - 1){
//         return "Birdie";
//     }else if(golpes === par){
//         return "Par";
//     }else if(golpes === par + 1){
//         return "Bogey";
//     }else if(golpes === par + 2){
//         return "Doble Bogey";
//     }else{
//         return "Peor que Doble Bogey";
//     }
// }

// console.log(puntajeDeGolf(4,1));
// console.log(puntajeDeGolf(4,2));
// console.log(puntajeDeGolf(4,3));
// console.log(puntajeDeGolf(4,4));
// console.log(puntajeDeGolf(4,5));
// console.log(puntajeDeGolf(4,6));
// console.log(puntajeDeGolf(4,7));

//------------------Switch----------------

// let dia = 3;
// //Muy similar a otros lenguajes
// switch(dia){
//     case 1:
//         console.log("Lunes");
//         break;
//     case 2:
//         console.log("Martes");
//         break;
//     case 3:
//         console.log("Miercoles");
//         break;
//     case 4:
//         console.log("Jueves");
//         break;
//     case 5:
//         console.log("Viernes");
//         break;
//     case 6:
//         console.log("Sabado");
//         break;
//     case 7:
//         console.log("Domingo");
//         break;
//     default:
//         console.log("Dia no valido");
//         break;
// }

// function caseInSwitch(val){
//     var respuesta = "";
//     switch(val){
//         case 1:
//             respuesta = "alpha";
//             break;
//         case 2:
//             respuesta = "beta";
//             break;
//         case 3:
//             respuesta = "gamma";
//             break;
//         case 4:
//             respuesta = "delta";
//             break;
//     }
//     return respuesta;
// }

// var producto = "hamburguesa";

// switch(producto){
//     case "hotdog":
//         console.log("El precio es 1.50");
//         break;
//     case "hamburguesa":
//         console.log("El precio es 2.50");
//         break;
//     case "pizza":
//         console.log("El precio es 3.50");
//         break;
//     default:
//         console.log("No hay producto");
//         break;
// }
// //Nota se puede retornar lo que sea en un switch, no solo strings
// function clasificarVolumen(valor){
//     switch(valor){
//         case 1:
//             return "Bajo";
//             break;
//         case 2:
//         case 3:
//         case 4:
//             return "Medio";
//             break;
//         case 5:
//         case 6:
//         case 7:
//             return "Alto";
//             break;
//         default:
//             return "No valido";
//             break;
//     }
// }
// //Despues del return no se ejecuta nada, es util cuando necesitamos detener la ejecución de un bloque de código y retornar un valor.
// //Ejemplo: retornar un undifined si no se cumple ninguna condición.

// var conteo = 0;

// function contarCartas(card){
//     switch(card){
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             conteo++;
//             break;
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A":
//             conteo--;
//             break;
//     }
//     var holdbet = "Esperar";
//     if(conteo > 0){
//         holdbet = "Apostar";
//     }
//     return conteo + " " + holdbet;
// }


//------------------Objetos----------------

// let miPerro = {
//     "nombre" : "Blue",
//     "edad": 0.5,
//     "raza": "Husky",
//     "color": "Blanco"
// };

// console.log(miPerro);
// console.log("Mi perro se llama " + miPerro.nombre);
// console.log("Mi perro tiene " + miPerro.edad + " años");
// console.log("Mi perro es de raza " + miPerro.raza);
// console.log("Mi perro es de color " + miPerro.color);

// let miPc ={
//     marca: "ASUS",
//     modelo: "TUF",
//     ram: 16,
//     procesador: "AMD Ryzen 5", //comillas necesarias si el nombre tiene espacios
// };
// //La notacion de corchetes es obligatoria si mi atrubuto tiene espacios
// console.log(miPc)

// console.log("Mi pc es una" + miPc["marca"]);
// console.log("Mi pc es un " + miPc["modelo"]);
// console.log("Mi pc tiene " + miPc["ram"] + " GB de RAM");
// console.log("Mi pc tiene un procesador " + miPc["procesador"]);

// let modeloIndex = 2;

// console.log(miPc[modeloIndex]);

// //Manipular atributos
// miPc.ram = 32;
// console.log(miPc);

// var mochila = {
//     "color": "azul",
//     "marca": "Nike",
//     "tamaño": "grande",
//     "material": "tela",
//     "contenido": ["libro", "cuaderno", "lapiz"]
// };

// console.log(mochila);
// mochila.contenido.push("borrador");
// console.log(mochila);

// //Agregar atributos
// mochila.peso = "1kg";
// mochila["peso"]= "1kg";
// console.log(mochila);

// //Eliminar atributos
// delete mochila.peso;

// //Verificar propiedades

// var miObjeto = {
//     "nombre": "Nicolas",
//     "edad": 25,
//     "estudiante": true
    
// };
// console.log(miObjeto.hasOwnProperty("nombre")); //true
// console.log(miObjeto.hasOwnProperty("apellido")); //false

// //Objetos más complejos

// var ordenesPizza = [
//     {
//         "tamaño": "mediana",
//         "tipo": "margarita",
//         "precio": 10,
//         "toppings": ["queso", "tomate"],
//         paraLlevar: true

//     },
//     {
//         "tamaño": "grande",
//         "tipo": "peperoni",
//         "precio": 15,
//         "toppings": ["queso", "peperoni"],
//         paraLlevar: true
//     }
// ];

// console.log(ordenesPizza);

// console.log(ordenesPizza[0]);
// console.log(ordenesPizza[1]);

// console.log(ordenesPizza[0].tamaño);
// console.log(ordenesPizza[1].tipo);

// //Objetos anidados

// var miReceta = {
//     "nombre": "Tarta de manzana",
//     "porciones": 8,
//     "ingredientes": [
//         {
//             "nombre": "manzanas",
//             "cantidad": 4
//         },
//         {
//             "nombre": "azucar",
//             "cantidad": "1 taza"
//         },
//         {
//             "nombre": "harina",
//             "cantidad": "2 tazas"
//         }
//     ]
// };

// console.log(miReceta);
// console.log(miReceta.ingredientes[0]);
// console.log(miReceta.ingredientes[1].nombre);
// console.log(miReceta.ingredientes[1].cantidad); 

// //Objetos dentro de arrays
// var misFlores = [
//     {
//         tipo:"flores",
//         lista: ["rosas", 
//                 "girasoles",
//                 "margaritas"]
//     },
//     {
//         tipo:"arboles",
//         lista: ["pino",
//                 "roble",
//                 "cedro"]
//     }
// ]

// var primeraFlor = misFlores[0].lista[0];
// var segundaFlor = misFlores[0].lista[1];
// console.log(primeraFlor);

// var coleccionDiscos = {
//     7853: {
//         artista: "Queen",
//         album: "A Night at the Opera",
//         canciones: ["Bohemian Rhapsody", "You're my best friend"]
//     },
//     5439: {
//         artista: "The Beatles",
//         album: "Abbey Road",
//         canciones: ["Come Together", "Here Comes the Sun"]
//     }
// };

// function actualizarDiscos(id, propiedad, valor){
//     if(valor === ""){
//         delete coleccionDiscos[id][propiedad];
//     }
//     else if(propiedad === "canciones" && coleccionDiscos.id.hasOwnProperty("canciones")){
//         coleccionDiscos.id["canciones"] = [];
//         coleccionDiscos.id["canciones"].push(valor);
//     }
//     else if(propiedad ==="canciones" && valor !== ""){
//         coleccionDiscos.id["canciones"].push(valor);
//     }
//     else if(valor !== "" && propiedad !== "canciones"){
//         if(coleccionDiscos.id.hasOwnProperty(propiedad)){
//             coleccionDiscos.id[propiedad] = valor;
//         }
//         else {
//             coleccionDiscos.id[propiedad] = []
//             coleccionDiscos.id[propiedad].push(valor);    
//         }       
//     }
// }


//------------------Ciclos----------------
