import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { HomeComponent } from './home/home.component';
import { CrudDatosComponent } from './crud-datos/crud-datos.component';



const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'Crud', component: CrudComponent},
  { path: 'CrudDatos', component: CrudDatosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
