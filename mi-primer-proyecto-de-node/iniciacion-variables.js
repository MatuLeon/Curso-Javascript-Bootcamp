//3 formas de definir variables
/*var variable;
let variableLet;

const constante;*/
const constante = "Hola soy una constante";
console.log("constante");
// constante = "Adiós" nos da un error

var a = 1;
console.log (a);

a = 4;
console.log(a);



// Como declarar variables

let b = 3;
console.log(b);


// Diferencia entre var y let

// Var afecta a todo el codigo y Let solo al bloque donde este declarado

var variable= "Hoal soy una varaible VAR";

for (var i= 0;i<3; i++){
    var variable = "Soy la segunda variable";
}

console.log(variable);

let variableLet= "Hola soy una variable Let";

for (var i= 0; i < 3; i++){
    let variableLet = "Soy la segunda variable Let";
}

console.log("variableLet");