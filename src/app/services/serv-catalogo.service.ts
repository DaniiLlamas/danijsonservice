import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import {ICatalogo } from '../interfaces/ICatalogo'
@Injectable({
  providedIn: 'root'
})
export class ServCatalogoService {

  
  constructor( private http: HttpClient) { }

  getAll(): Observable<ICatalogo[]>{ 
    let url = `${environment.apiURL}/catalogo`;
    
    return this.http.get<ICatalogo[]>(url);

  }

  public buscarPorId(id:number):any{
    let url = `${environment.apiURL}/catalogo/${id}`;
    return this.http.get<ICatalogo>(url);
   }
   

  public anadir(libro:ICatalogo){
    let url = `${environment.apiURL}/catalogo`;
    this.http.post(url,libro);
  }

  /*public editar(libro:ICatalogo){
    let libroEditar = this.buscarPorId(libro.id);
    if(libroEditar != null)
    
  }*/
}
