import { Component } from '@angular/core';

import {Producto} from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productoArray: Producto[]=[
    {nombre:"Chocolate",costo:10,inventario:20},
    {nombre:"Azucar",costo:20,inventario:13}
  ];
}
