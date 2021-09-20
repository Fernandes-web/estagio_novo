import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/home', icon: 'home' },
    { title: 'Seu Currículo', url: '/curriculo', icon: 'document-text' },
    { title: 'Contatos', url: '/contacts', icon: 'chatbubbles' },
    { title: 'Sobre', url: '/about', icon: 'information-circle' },
  ];
  constructor(public auth: AngularFireAuth) {}
}
