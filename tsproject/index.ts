// String number y boolean

let aNumber: number = 1;
const aString: string = 'This is a string';
let aBoolean: boolean = true;
let anotherBoolean = true;  //se asigna su tipo al momento de asignarle el valor automaticamente


// variables al estilo JS
let variable: any;


// enumerador
enum Colores{
    Rojo,
    Verde,
    Azul
}     

let color: Colores = Colores.Azul;
console.log(color);

//arrays
const arrayNumeros: number[] = [1,2,3,4,5];


function suma(a:number,b:number):number{
    return a+b;
}

function sumaJS(a:any,b:any):any{
    return a+b;
}

console.log(suma(5,7));
//console.log(suma(5,Number('7'));


const suma2 = function(a: number, b: number): number {
    return a + b;
}

const suma3 = (a: number, b: number): number => {
    return a + b;
}

const suma4 = (a: number, b: number): number => a + b;



// Interfaces //
enum TipoOperacion{
    Debito,
    Credito
}

interface Transaccion {
    id: number;
    cuenta: number;
    fecha: string;
    operacion: TipoOperacion;
    monto: number
}

let transaccion: Transaccion = {
    id: 123,
    cuenta: 2000,
    fecha: '2021-11-12',
    operacion: TipoOperacion.Credito,
    monto: 100.01
}

transaccion.operacion = TipoOperacion.Debito;

class Cuenta{
    // id:number;
    // cuit:string;
    // saldo:number;
    // transacciones :Transaccion[];

    // constructor(
    //     id:number,
    //     cuit:string,
    //     saldo:number,
    //     transacciones :Transaccion[],
    // ){
    //     this.id = id;
    //     this.cuit =cuit;
    //     this.saldo=saldo;
    //     this.transacciones=transacciones;
    // }  

    constructor (
        public id:number,
        public cuit:string,
        public saldo:number,
        public transacciones :Transaccion[],

    ){}

        agregarTransaccion (transaccion: Transaccion){
            if (transaccion.operacion === TipoOperacion.Debito){
                this.saldo = this.saldo - transaccion.monto;
            }else{
                this.saldo = this.saldo + transaccion.monto;
            }
            this.transacciones.push(transaccion);
        }

}
    

    const cuenta = new Cuenta(1,'30-13321654-5', 100.00,[]);
    console.log(cuenta);
    cuenta.agregarTransaccion({id:11, cuenta:1, fecha:'2021-11-12',operacion:TipoOperacion.Debito,monto:100.00})
    console.log(cuenta);
    


