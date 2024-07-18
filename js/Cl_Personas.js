export default class Cl_Personas{
    constructor(n, e, s){
        this.nombre = n;
        this.edad = e
        this.sexo = s;}
    set edad(e){
        this._edad = +e
    }
    set nombre(n){
        this._nombre = +n
    }
    get edad(){
        return this._edad;
    }
    get nombre(){
        return this._nombre;
    }
    set sexo(s){
        this._sexo = +s;
    }
    get sexo(){
        return this._sexo;
    }
}