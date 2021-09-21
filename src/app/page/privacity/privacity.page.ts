import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-privacity',
  templateUrl: './privacity.page.html',
  styleUrls: ['./privacity.page.scss'],
})
export class PrivacityPage implements OnInit {

  constructor(public auth: AngularFireAuth) { }

  ngOnInit() {
  }

}
