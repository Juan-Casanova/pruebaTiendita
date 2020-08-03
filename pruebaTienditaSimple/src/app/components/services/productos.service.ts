import { Injectable } from '@angular/core';
import {Producto} from '../../models/producto';

@Injectable()
export class ProductosService {

  private productoArray:Producto[]

  constructor() { 
  this.productoArray=[
    {nombre:"Chocolate",costo:10,inventario:20},
    {nombre:"Azucar",costo:20,inventario:13}
  ];
  this.productoArray=[];
  }

getProductos()
{
  return this.productoArray;
}

}

