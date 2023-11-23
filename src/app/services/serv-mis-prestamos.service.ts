import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICatalogo } from '../interfaces/ICatalogo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServMisPrestamosService {

  listaPrestada =[
   

      ]
  
  constructor( private http: HttpClient) { }

  getAll():Observable<ICatalogo[]>{

  let url = `${environment.apiURL}/prestamos`;
  return this.http.get<ICatalogo[]>(url);
  }

  public add(prestamo:ICatalogo){
    let url = `${environment.apiURL}/prestamos`;
    this.http.post(url, prestamo);
  }

  public delete(id:number){
   let url = `${environment.apiURL}/prestamos/${id}`
   this.http.delete(url);

  }

  public buscarPorId(id:number):any{
    let url = `${environment.apiURL}/catalogo/${id}`;
    return this.http.get<ICatalogo>(url);
   }


}