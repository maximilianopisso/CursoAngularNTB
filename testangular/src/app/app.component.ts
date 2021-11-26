import { Component } from '@angular/core';

@Component({
  // es un decorador -> le agrega info para que el runtime pueda darse cuenta que es un componente

  selector: 'app-root', //
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
}
