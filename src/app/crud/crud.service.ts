import { Injectable } from '@angular/core';
import { Observable,catchError, throwError } from 'rxjs';
import { Crudentity } from './crudentity';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  urlEndPoint : string = "http://localhost:8090/Api/crud";
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private  http: HttpClient) { }


  create(crud : Crudentity) : Observable<Crudentity>{
    return this.http.post<Crudentity>(this.urlEndPoint,crud,{headers : this.httpHeaders}).pipe(
      catchError(e=>{

        if (e.status == 400){
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire('Error al grabar el formulario',e.error.mensaje,'error');
        return throwError(e);
      }

      ))}
}
