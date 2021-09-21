import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  private body = document.body.classList;

  constructor(
    public auth: AngularFireAuth,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    if (this.body.contains('dark')) {
      document.getElementById('themeToggle').setAttribute('checked', 'true');
    }
  }

  onClick(event) {
    if (event.detail.checked) {
      this.body.add('dark');
      this.cookieService.put('themeCookie', 'dark');
    } else {
      this.body.remove('dark');
      this.cookieService.put('themeCookie', '');
    }
  }
}
 