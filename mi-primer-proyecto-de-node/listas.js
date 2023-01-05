//Listas, arrays o arreglo
//---->¿QUE SON?  Conjunto de variables puestas en orden
const lista = [1 , "hola", false, undefined, null];
console.log (lista);


const lista2 = new Array (2, "hola", false, undefined, null);
console.log (lista2);


const lista3= new Array(3);
lista3[0] = "soy el primer elemento, index 0";
console.log(lista3);

const lista4= [lista, lista2, lista3];
console.log(lista4)

//Objetos
//Los objetos son representaciones de datos de objetos de la vida real
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Gorka", "Martin", "Raúl"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    },
}

movil.anyo = 2019;
console.log(movil.anyo)


//Fechas
//Libreria de apoto Moment.js

const ahora = new Date()
console.log(ahora)


