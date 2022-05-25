import { Component, OnInit } from '@angular/core';
import { Crudentity } from './crudentity';
import { CrudService } from './crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  crud : Crudentity = new Crudentity(); 
  constructor(private crudService : CrudService) { }

  ngOnInit(): void {
  }

  public create () : void{
    this.crudService.create(this.crud)
    .subscribe(crud => {
        Swal.fire('Formulario de',`la persona ${this.crud.nombre} ingresado con exito!`, 'success')
      }
    )
  }

}
