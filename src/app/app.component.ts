import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Catalogo', url: '/catalogo-page', icon: 'mail' },
    { title: 'Prestamos', url: '/mis-prestamos-page', icon:'paper-plane'},
    { title: 'Inicio', url: '/home', icon:'paper-plane'}
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
