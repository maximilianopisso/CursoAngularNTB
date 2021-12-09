import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/persona.model';
import {Pers}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  personas: Persona[] = [
    {nombre: 'Juan', apellido: 'Perez', edad:27},
    {nombre: 'Pedro', apellido: 'Peta', edad:30},
    {nombre: 'Vane', apellido: 'Montenegro', edad:32},
    {nombre: 'Fede', apellido: 'Suizra', edad:33},
  ];


  personaForm = new FormGroup({
    nombre: new FormControl('',[Validators.required,Validators.minLength(3)]),
    apellido: new FormControl(''),
    edad: new FormControl('')
  });

  nombreControl = this.personaForm.controls['nombre'];

  constructor() { }

  ngOnInit(): void {
    //this.personaForm.valueChanges.subscribe(values => console.log('value changes', values));
    this.personaForm.controls['nombre'].valueChanges.subscribe(values => console.log('value changes', values));
  }

  guardar() {
    console.log(this.personaForm.value);
  }
}
