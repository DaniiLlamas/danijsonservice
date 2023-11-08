import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Catalogo', url: '/catalogo-page', icon: 'paper-plane' },
    { title: 'Prestamos', url: '/mis-prestamos-page', icon:'paper-plane'},
    { title: 'Inicio', url: '/home', icon:'mail'}
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
