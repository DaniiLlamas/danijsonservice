import { Component, OnInit } from '@angular/core';
import { ServMisPrestamosService } from '../services/serv-mis-prestamos.service';
import { ServCatalogoService } from '../services/serv-catalogo.service';
import { ICatalogo } from '../interfaces/ICatalogo';

@Component({
  selector: 'app-catalogo-page',
  templateUrl: './catalogo-page.page.html',
  styleUrls: ['./catalogo-page.page.scss'],
})
export class CatalogoPagePage implements OnInit {
  catalogoLibros!:ICatalogo[];
  constructor(servCatalogo : ServCatalogoService) {
    servCatalogo.getAll().subscribe(
      (resp) =>{
        this.catalogoLibros =  resp;
      }
    )
   }

  ngOnInit() {
  }

  
}
