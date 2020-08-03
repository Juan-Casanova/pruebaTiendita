import { Component, OnInit, Input } from '@angular/core';
import {Producto} from '../../models/producto';
import {AppComponent} from '../../app.component';

import {ProductosService} from "../../components/services/productos.service"



@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  producto:Producto;
  productos:Producto[];

  constructor(private productosService:ProductosService) {

  }

  ngOnInit(): void {
    this.productos=this.productosService.getProductos();
  }
  
  
}
