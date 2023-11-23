import { Component, OnInit } from '@angular/core';
import { ServMisPrestamosService } from '../services/serv-mis-prestamos.service';
import { ICatalogo } from '../interfaces/ICatalogo';

@Component({
  selector: 'app-mis-prestamos-page',
  templateUrl: './mis-prestamos-page.page.html',
  styleUrls: ['./mis-prestamos-page.page.scss'],
})
export class MisPrestamosPagePage implements OnInit {
  catalogoPrestamos:ICatalogo[] | undefined

  constructor(private servPrestamos : ServMisPrestamosService) {
    
   }
  ngOnInit(): void {
    this.servPrestamos.getAll().subscribe(
      (resp) => {
        this.catalogoPrestamos = resp;
      }
    )
  }

  

  borraPrestamo(id:number) {
    this.servPrestamos.delete(id)
    this.servPrestamos.getAll().subscribe(
      (resp) => {
        this.catalogoPrestamos = resp;
      }
    )
  }

}
