import { Component, OnInit } from '@angular/core';
import { ServMisPrestamosService } from '../services/serv-mis-prestamos.service';
import { ServCatalogoService } from '../services/serv-catalogo.service';

@Component({
  selector: 'app-catalogo-page',
  templateUrl: './catalogo-page.page.html',
  styleUrls: ['./catalogo-page.page.scss'],
})
export class CatalogoPagePage implements OnInit {
  catalogoLibros:any
  constructor(servCatalogo : ServCatalogoService) {
    this.catalogoLibros = servCatalogo.getAll()
   }

  ngOnInit() {
  }

}
