import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  persona: Persona ={
    nombre: 'Juan',
    apellido: 'Perez',
    edad : 23,
  }



  constructor() { }

  ngOnInit(): void {
  }

  agregarPersona(datos:any){
    console.log(datos);

  }
}
