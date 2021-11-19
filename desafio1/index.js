"use strict";
const TNA = 0.5;
const GANANCIA = 0.2;
let fechaDia = new Date();
var EstadoVeraz;
(function (EstadoVeraz) {
    EstadoVeraz["Apto"] = "Apto";
    EstadoVeraz["Moroso"] = "Moroso";
    EstadoVeraz["Incobrable"] = "NoApto";
})(EstadoVeraz || (EstadoVeraz = {}));
class Persona {
    constructor(dni, sueldoBruto, estadoCrediticio, prestamos, saldo) {
        this.dni = dni;
        this.sueldoBruto = sueldoBruto;
        this.estadoCrediticio = estadoCrediticio;
        this.prestamos = prestamos;
        this.saldo = saldo;
    }
    simularCredito(montoPrestamo, cuotas) {
        let tasaInteres;
        let montoFinanciado;
        let montoMensual;
        console.log("---------------------------------------------------------------------");
        console.log("                 S I M U L A D O R   C R E D I T O                   ");
        console.log("---------------------------------------------------------------------");
        if (this.estadoCrediticio == EstadoVeraz.Incobrable) {
            console.log("SU ESTADO CREDITICIO, NO LE PERMITE TOMAR CREDITOS");
            return false;
        }
        else {
            if (this.estadoCrediticio == EstadoVeraz.Moroso) {
                tasaInteres = TNA * 1.25;
            }
            else {
                tasaInteres = TNA;
            }
            montoFinanciado = (montoPrestamo * (1 + (tasaInteres) / 12 * cuotas)) * (1 + GANANCIA);
            montoMensual = montoFinanciado / cuotas;
            if ((this.sueldoBruto * 0.5) <= montoMensual) {
                console.log("EL CREDITO NO SE PUEDE OTOROGAR, SUS INGRESOS SON INSUFICIENTES");
                return false;
            }
            else {
                console.log(`USTEDED ES APTO PARA EL CREDITO SOLICITADO`);
                console.log(`Monto Financiado = ${montoFinanciado}`);
                console.log(`Numero de cuotas = ${cuotas}`);
                console.log(`Valor Cuota = ${montoFinanciado / cuotas}`);
                console.log(`Intereses = ${((montoFinanciado - montoPrestamo) / montoPrestamo) * 100} % \n`);
                return true;
            }
        }
        console.log("---------------------------------------------------------------------");
    }
    aprobarCredito(montoPrestamo, cuotas) {
        let tasaInteres;
        let montoFinanciado;
        let montoMensual;
        let prestamo;
        if (this.estadoCrediticio == EstadoVeraz.Moroso) {
            tasaInteres = TNA * 1.25;
        }
        else {
            tasaInteres = TNA;
        }
        montoFinanciado = (montoPrestamo * (1 + (tasaInteres) / 12 * cuotas)) * (1 + GANANCIA);
        prestamo = {
            montoSolicitado: montoPrestamo,
            cantCuotas: cuotas,
            valorCuota: (montoFinanciado / cuotas),
            tasaInteres: ((montoFinanciado - montoPrestamo) / montoPrestamo),
            fecha: fechaDia.toDateString(),
        };
        this.prestamos.push(prestamo);
        this.saldo += montoPrestamo;
    }
}
let personas = [];
let persona1 = new Persona(33345456, 120000, EstadoVeraz.Apto, [], 2000);
let persona2 = new Persona(32864512, 65000, EstadoVeraz.Moroso, [], 1700);
let persona3 = new Persona(32863412, 80000, EstadoVeraz.Incobrable, [], 100);
personas.push(persona1);
personas.push(persona2);
personas.push(persona3);
personas.forEach(persona => {
    if (persona.simularCredito(200000, 12)) {
        persona.aprobarCredito(200000, 12);
        console.log("---------------------------------------------------------------------");
        console.log("                   C R E D I T O  A P R O B A D O                    ");
        console.log("---------------------------------------------------------------------" + "\n");
        console.log(persona);
    }
    else {
        console.log("NO SE APRUEBA CREDITO");
    }
});
