import { Component, OnInit } from '@angular/core';
import { ServMisPrestamosService } from '../services/serv-mis-prestamos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServCatalogoService } from '../services/serv-catalogo.service';

@Component({
  selector: 'app-libro-page',
  templateUrl: './libro-page.page.html',
  styleUrls: ['./libro-page.page.scss'],
})
export class LibroPagePage implements OnInit {
  id:any;
  libroRecibido:any;
  navCtrl:any;
  listaPrestamos:any;
  constructor(private prestService: ServMisPrestamosService,private libroService: ServCatalogoService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {this.id = params['id']})
    this.libroRecibido = this.libroService.buscarPorId(this.id);
    this.listaPrestamos = this.prestService.getAll()
  }

  guardaLibro(){
    this.prestService.add(this.libroRecibido)
    this.router.navigate(['mis-prestamos-page'])
  }

}  

