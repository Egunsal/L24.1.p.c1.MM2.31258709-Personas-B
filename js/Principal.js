import Cl_Personas from "./Cl_Personas.js"
import Cl_Procesar from "./Cl__Procesar.js"

let persona1 = new Cl_Personas("Luis", 15, "M")
let persona2 = new Cl_Personas("Ana", 19, "F")
let persona3 = new Cl_Personas("Jose", 21, "M")
let persona4 = new Cl_Personas("Carmen", 17, "F")
let persona5 = new Cl_Personas("Rosa", 18, "F")
let persona6 = new Cl_Personas("Jose", 22, "M")
let persona7 = new Cl_Personas("Maria", 17, "F")
let persona8 = new Cl_Personas("Rafael", 23, "M")
let persona9= new Cl_Personas("Liz", 15, "F")
let persona10 = new Cl_Personas("Marcos", 20, "M")
let persona11= new Cl_Personas("Leo", 16, "M")
let persona12= new Cl_Personas("Luz", 19, "F")

let Procesar = new Cl_Procesar()

Procesar.procesarPersona(persona1);
Procesar.procesarPersona(persona2);
Procesar.procesarPersona(persona3);
Procesar.procesarPersona(persona4);
Procesar.procesarPersona(persona5);
Procesar.procesarPersona(persona6);
Procesar.procesarPersona(persona7);
Procesar.procesarPersona(persona8);
Procesar.procesarPersona(persona9);
Procesar.procesarPersona(persona10);
Procesar.procesarPersona(persona11);
Procesar.procesarPersona(persona12);

let salida = document.getElementById("salida");
salida.innerHTML = "Edad promedio: "+ Procesar.calcularPromedio();
salida.innerHTML += "<br>Edad mayor entre las mujeres: "+ Procesar.devolverAuxEdad();
