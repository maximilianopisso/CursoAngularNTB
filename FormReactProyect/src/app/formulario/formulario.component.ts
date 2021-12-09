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

  persona: Persona = {
    nombre: '',
    apellido: '',
    email: '',
    direccion: '',
    pais: '',
    ciudad: '',
    cp: undefined,
    mayorEdad: undefined,
    sexo: '',
  }

  personaReactForm = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.maxLength(20)]),
    apellido: new FormControl('',[Validators.required, Validators.maxLength(20)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    //direccion: new FormControl('',Validators.pattern('([A-Za-z])*[0-9]{1,5}]')),
    direccion: new FormControl('',Validators.required),
    pais: new FormControl('',[Validators.required]),
    ciudad: new FormControl('',[Validators.required]),
    cp: new FormControl('',[Validators.required,Validators.pattern('[0-9]{4,5}')]),
    mayorEdad: new FormControl('', Validators.required),
    sexo: new FormControl('',[Validators.required]),
  });

  nombreControl = this.personaReactForm.controls['nombre'];
  apellidoControl = this.personaReactForm.controls['apellido']
  emailControl = this.personaReactForm.controls['email'];
  direccionControl = this.personaReactForm.controls['direccion'];
  paisControl =this.personaReactForm.controls['pais'];
  ciudadControl =this.personaReactForm.controls['ciudad'];
  cpControl = this.personaReactForm.controls['cp'];
  sexoControl = this.personaReactForm.controls['sexo'];

  constructor() { }

  ngOnInit(): void {

    this.persona.mayorEdad = false;
    this.personaReactForm.valueChanges.subscribe(values => {
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

  reset() {
    this.personaReactForm.reset();
    this.persona.mayorEdad = false;
  }

}
