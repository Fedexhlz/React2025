let numero = 25;
//mutacion de variable
numero = 10;

console.log(numero);

//arrays

//let numeros = [2, 4, 6, 7, 10, -11];

//for - forEach - map - for of

let numerosPares = [];

let nombre = "ramiro";

// for (let index = 0; index < numeros.length; index++) {

//     numerosPares.push(numeros[index] %2 ==0)

// }
// numerosPares.forEach(num=>console.log(num))
//numeros.forEach(num=>console.log(num))

// console.log(numeros.filter((num) => num % 2 == 0));

// console.log(numeros.map((num) => num % 2 != 0));

// for (const numero of numeros) {
//     console.log(numero);
// }
// console.log(nombre.includes("a"));

// let nombres = ["carlos", "romina"];

// console.log(numeros.concat(nombres));

//condicional
// if (numero>18) {
//     console.log("es mayor de edad");
// }else {
//     console.log("es menor de edad");
// }

//ternario

//numero<18 ? console.log("es menor") : console.log("es mayor")
numero < 18 ? console.log("es menor") : null;

numero > 18 && console.log("es mayor de edad");

let Persona = {
  nombre: "raul",
  edad: 40,
  direccion: {
    nombreCalle: "uruguay",
    numero: 4000,
  },
  materias: ["prog", "lab", "DB"],
  mascotas: [
    {
      nombre: "paco",
      raza: "salchicha",
      vacunas:[{
        nombreVacuna:"pfizzer",
        dosis:"10ml"
      }]
    },
    {
      nombre: "garfield",
      raza: "gato",
    },
  ],
};

// console.log(Persona.direccion.nombreCalle);

// Persona.materias.forEach((materia) => console.log(materia));

//destructuring - destructuramiento
//que necesito de PERSONA 

let {edad,direccion={nombreCalle}} = Persona

// console.log(edad,nombreCalle);
// console.log(Persona.direccion.nombreCalle);

// function sumar(a,b) {
//     return a+b
// }

// console.log(sumar(2,5))

// //funciones flechas

// const restar = (c,d) => {
//     return c-d 
// }

// console.log(restar(4,5));


let numeros = [2, 4, null, 7, false, -11 , 15.78 ,undefined];
//donde esta lo que necesito
// let [a,b,c,d,quinta,sexta] = numeros

// console.log(a,d,sexta);

//spread operator 

// let [a,b,...resto] = numeros
let [...todos] = numeros
console.log(...todos);

//async await 

//promesas -> True - False - pendiente

//callback hell 
// then().
// then().
// then().
// catch()
// .finally()
// async await

 let estudiantes = ["alvaro","belen","pablo","karen"]

const [a,b,c,d] = estudiantes



console.log(d,c,b,a);


// for (const estudiante of estudiantes) {
//     console.log(estudiante);
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index]; 
// }

//template strings o backticks ALT + 96
document.getElementById("principal").innerHTML = `<h2>Welcome To React 2025</h2>`

const Saludar = () =>{
    console.log("Hola como estan alumnos");
}

//emitir un evento de boton (click)
document.getElementById("btnSaludar").addEventListener("click",Saludar)

const despedir =() =>{
    console.log("chaoooooo");
}


let Estudiantes = [{
    id:1,
    nombre:"alvaro",
    edad:25,
    Soltero:true
},{
    id:2,
    nombre:"belen",
    edad:18,
    Soltero:false
},{
    id:3,
    nombre:"pablo",
    edad:30,
    
}
]
//optional chaining
Estudiantes.map(estudiante=> console.log(estudiante?.Soltero))

