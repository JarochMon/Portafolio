import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { AppComponent } from './app.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path : "acerca-de", component : AcercaDeComponent},
  {path : "contactame", component : ContactanosComponent},
  {path : "proyectos", component : ProyectosComponent},
  {path : "inicio", component : InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
