import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './Componentes/detalles/detalles.component';
import { HomeComponent } from './Componentes/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'search/:game-search', component: HomeComponent},
  {path: 'details/:id', component: DetallesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
