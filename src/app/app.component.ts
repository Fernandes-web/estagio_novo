import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public appPages = [
    { title: 'Início', url: '/home', icon: 'home' },
    { title: 'Seu Currículo', url: '/curriculo', icon: 'document-text' },
    { title: 'Contatos', url: '/contacts', icon: 'chatbubbles' },
    { title: 'Sobre', url: '/about', icon: 'information-circle' },
    { title: 'Configurações', url: '/config', icon: 'cog' },
    { title: 'Privacidade', url: '/privacity', icon: 'document-lock' },
  ];
  constructor(
    public auth: AngularFireAuth,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    if (this.cookieService.get('themeCookie') === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    //this.splash.style.display= 'none';

    setTimeout(() => {
      document.getElementById('splash').style.display = 'none';
    }, 2000);
  }
}
