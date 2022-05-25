import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CrudService } from './crud/crud.service';
import { CrudDatosComponent } from './crud-datos/crud-datos.component';



@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    HeaderComponent,
    HomeComponent,
    CrudDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
