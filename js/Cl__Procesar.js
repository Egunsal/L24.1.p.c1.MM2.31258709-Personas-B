export default class Cl_Procesar{
    constructor(){
        this.acumEdad = 0;
        this.contPersonas = 0;  
        this.mayor = 0;
        this.auxEdad = 0;
    }
    procesarPersona(pe){
        this.acumEdad+= pe.edad;
        this.contPersonas++;
        if(pe.sexo = "F" && pe.edad > this.mayor){
            this.auxEdad = pe.edad;
        }
         
    }
    calcularPromedio(){
        return this.acumEdad/this.contPersonas;
    }
    devolverAuxEdad(){
        return this.auxEdad;
    }
}