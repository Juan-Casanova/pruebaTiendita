import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaComponent } from './alta/alta.component';
import { CarritoComponent } from './carrito/carrito.component';



@NgModule({
  declarations: [AltaComponent, CarritoComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
