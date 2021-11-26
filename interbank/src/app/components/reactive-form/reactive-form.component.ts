import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

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
