"use strict";
// String number y boolean
var aNumber = 1;
var aString = 'This is a string';
var aBoolean = true;
var anotherBoolean = true; //se asigna su tipo al momento de asignarle el valor automaticamente
// variables al estilo JS
var variable;
// enumerador
var Colores;
(function (Colores) {
    Colores[Colores["Rojo"] = 0] = "Rojo";
    Colores[Colores["Verde"] = 1] = "Verde";
    Colores[Colores["Azul"] = 2] = "Azul";
})(Colores || (Colores = {}));
var color = Colores.Azul;
console.log(color);
//arrays
var arrayNumeros = [1, 2, 3, 4, 5];
function suma(a, b) {
    return a + b;
}
function sumaJS(a, b) {
    return a + b;
}
console.log(suma(5, 7));
//console.log(suma(5,Number('7'));
var suma2 = function (a, b) {
    return a + b;
};
var suma3 = function (a, b) {
    return a + b;
};
var suma4 = function (a, b) { return a + b; };
// Interfaces //
var TipoOperacion;
(function (TipoOperacion) {
    TipoOperacion[TipoOperacion["Debito"] = 0] = "Debito";
    TipoOperacion[TipoOperacion["Credito"] = 1] = "Credito";
})(TipoOperacion || (TipoOperacion = {}));
var transaccion = {
    id: 123,
    cuenta: 2000,
    fecha: '2021-11-12',
    operacion: TipoOperacion.Credito,
    monto: 100.01
};
transaccion.operacion = TipoOperacion.Debito;
var Cuenta = /** @class */ (function () {
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
    function Cuenta(id, cuit, saldo, transacciones) {
        this.id = id;
        this.cuit = cuit;
        this.saldo = saldo;
        this.transacciones = transacciones;
    }
    Cuenta.prototype.agregarTransaccion = function (transaccion) {
        if (transaccion.operacion === TipoOperacion.Debito) {
            this.saldo = this.saldo - transaccion.monto;
        }
        else {
            this.saldo = this.saldo + transaccion.monto;
        }
        this.transacciones.push(transaccion);
    };
    return Cuenta;
}());
var cuenta = new Cuenta(1, '30-13321654-5', 100.00, []);
console.log(cuenta);
cuenta.agregarTransaccion({ id: 11, cuenta: 1, fecha: '2021-11-12', operacion: TipoOperacion.Debito, monto: 100.00 });
console.log(cuenta);
