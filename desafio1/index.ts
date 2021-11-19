const TNA :number = 0.5;
const GANANCIA:number = 0.2;
let fechaDia:Date = new Date();
enum EstadoVeraz{
    Apto = "Apto",
    Moroso = "Moroso",
    Incobrable = "NoApto"
}

//Defino el tipo Prestamo

interface IPrestamo {
    montoSolicitado: number;
    cantCuotas: number;
    valorCuota: number;
    tasaInteres: number;
    fecha: String;
}

class Persona{
    constructor(
    public dni: number,
    public sueldoBruto:number,
    public estadoCrediticio:EstadoVeraz,
    public prestamos: IPrestamo[],
    public saldo: number){}

      
    simularCredito(montoPrestamo:number, cuotas:number){
        let tasaInteres:number;
        let montoFinanciado:number;
        let montoMensual:number;
        
        console.log("---------------------------------------------------------------------");
        console.log("                 S I M U L A D O R   C R E D I T O                   ");
        console.log("---------------------------------------------------------------------");
        
        if (this.estadoCrediticio == EstadoVeraz.Incobrable){
            
            console.log("SU ESTADO CREDITICIO, NO LE PERMITE TOMAR CREDITOS");
            return false;

        }else{

            if (this.estadoCrediticio == EstadoVeraz.Moroso){    
                tasaInteres = TNA * 1.25;
            }else{
                tasaInteres = TNA;
            }
            
            montoFinanciado = (montoPrestamo * (1 + (tasaInteres)/12 * cuotas))*(1+GANANCIA);
            
            montoMensual = montoFinanciado/cuotas;
           
            if ((this.sueldoBruto*0.5) <= montoMensual){
                console.log("EL CREDITO NO SE PUEDE OTOROGAR, SUS INGRESOS SON INSUFICIENTES");
                return false;
            }else{
                console.log(`USTEDED ES APTO PARA EL CREDITO SOLICITADO`);
                console.log(`Monto Financiado = ${montoFinanciado}`);
                console.log(`Numero de cuotas = ${cuotas}`);
                console.log(`Valor Cuota = ${montoFinanciado/cuotas}`);
                console.log(`Intereses = ${((montoFinanciado-montoPrestamo)/montoPrestamo)*100} % \n`);
                return true;    
            }
        }
        console.log("---------------------------------------------------------------------");
    }

    aprobarCredito(montoPrestamo:number, cuotas:number){
        let tasaInteres:number;
        let montoFinanciado:number;
        let montoMensual:number;
        let prestamo:IPrestamo;

        if (this.estadoCrediticio == EstadoVeraz.Moroso){    
            tasaInteres = TNA * 1.25;
        }else{
            tasaInteres = TNA;
        }
        
        montoFinanciado = (montoPrestamo * (1 + (tasaInteres)/12 * cuotas))*(1+GANANCIA);
        
        prestamo = {        
            montoSolicitado: montoPrestamo,
            cantCuotas: cuotas,
            valorCuota: (montoFinanciado/cuotas),
            tasaInteres: ((montoFinanciado-montoPrestamo)/montoPrestamo),
            fecha: fechaDia.toDateString(),
        }
        
        this.prestamos.push(prestamo);
        this.saldo += montoPrestamo;
    }

}
let personas: Persona[] =[];
let persona1 = new Persona(33345456,120000,EstadoVeraz.Apto,[],2000);
let persona2 = new Persona(32864512,65000,EstadoVeraz.Moroso,[],1700);
let persona3 = new Persona(32863412,80000,EstadoVeraz.Incobrable,[],100);

personas.push(persona1);
personas.push(persona2);
personas.push(persona3);

personas.forEach(persona => {
    if (persona.simularCredito(200000,12)){
        
        persona.aprobarCredito(200000,12)
        console.log("---------------------------------------------------------------------");
        console.log("                   C R E D I T O  A P R O B A D O                    ");
        console.log("---------------------------------------------------------------------"+"\n");
        console.log(persona); 
    }else{
        console.log("NO SE APRUEBA CREDITO")
    }    
    
});
