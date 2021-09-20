import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.page.html',
  styleUrls: ['./curriculo.page.scss'],
})
export class CurriculoPage implements OnInit {

  item: any;

  constructor(public auth: AngularFireAuth, public afs: AngularFirestore, private router: Router) {}

  ngOnInit() {}

  ionViewWillEnter() {
    // Obtém dados do ligin
    this.auth.onAuthStateChanged((userData) => {
      if (userData) {
        // Consulta cadastro no database
        this.afs.firestore
          .doc(`curriculos/${userData.uid}`)
          .get()
          .then((uData) => {
            if (!uData.exists) {
              // Se não tem cadastro, vai para a página de cadastro
              this.router.navigate(['/novocurriculo']);
            } else {
              // Se tem cadastro, exibe perfil
              this.item = uData.data();
            }
          });
      }
    });
  }

  profile() {
    window.open('https://myaccount.google.com/');
    return false;
  }
}
