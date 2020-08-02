import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiendaComponent} from './pages/tienda/tienda.component';
import { AltaComponent} from './pages/alta/alta.component';
import { CarritoComponent} from './pages/carrito/carrito.component';

const routes: Routes = [
  {path:'tienda', component:TiendaComponent},
  {path:'darAlta', component:AltaComponent},
  {path:'carrito', component:CarritoComponent},
  {path:'**', pathMatch:'full', redirectTo:'tienda'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
