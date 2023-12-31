import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre:any;
  formuCorreo = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email])
  })
  constructor() {
    this.nombre = "";
  }

  muestraNombre(){
    this.nombre = this.formuCorreo.value
  }
}
