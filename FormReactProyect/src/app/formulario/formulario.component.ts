import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../models/persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {


  constructor() { }

  persona: Persona = {
    nombre: '',
    apellido: '',
    email:'',
    direccion: '',
    pais: '',
    ciudad: '',
    cp: undefined,
    mayorEdad: undefined,
    sexo: '',
    }

    personaReactForm = new FormGroup({
      nombre: new FormControl('',Validators.maxLength(10)),
      apellido: new FormControl(''),
      email: new FormControl(''),
      direccion: new FormControl(''),
      pais: new FormControl(''),
      ciudad: new FormControl(''),
      cp: new FormControl(''),
      mayorEdad: new FormControl(false),
      sexo: new FormControl(''),
    });

  ngOnInit(): void {

     this.personaReactForm.valueChanges.subscribe(values => {
       console.log(values);
       this.persona.nombre = values.nombre;
       this.persona.apellido = values.apellido;
       this.persona.email = values.email;
       this.persona.direccion = values.direccion;
       this.persona.pais = values.pais;
       this.persona.ciudad = values.ciudad;
       this.persona.cp = values.cp;
       this.persona.mayorEdad = values.mayorEdad;
       this.persona.sexo = values.sexo;
     });
    }

  reset(){
    //console.log(this.personaReactForm.value);

    this.personaReactForm.reset();
  }

}
