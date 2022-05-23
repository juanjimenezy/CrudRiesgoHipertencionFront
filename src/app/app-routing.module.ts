import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { HomeComponent } from './home/home.component';
CrudComponent


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'Crud', component: CrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
