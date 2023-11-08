import { Component, OnInit } from '@angular/core';
import { ServMisPrestamosService } from '../services/serv-mis-prestamos.service';

@Component({
  selector: 'app-mis-prestamos-page',
  templateUrl: './mis-prestamos-page.page.html',
  styleUrls: ['./mis-prestamos-page.page.scss'],
})
export class MisPrestamosPagePage implements OnInit {
  catalogoPrestamos:any
  idDevolver:any
  libroDevolver:any
  constructor(private servPrestamos : ServMisPrestamosService) {
    this.catalogoPrestamos = servPrestamos.getAll()
   }

  ngOnInit() {
  }

  borraPrestamo(id:any) {
    this.servPrestamos.delete(id)
  }

}
