import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export interface Persona{

  nombre: String;
  apellido: String;
  email:String;
  direccion: String;
  pais: String;
  ciudad: String;
  cp?: Number;
  mayorEdad?:boolean;
  sexo: String;

}
