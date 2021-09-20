import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {
  public id: string;
  public user: any;
  public confirma: any;
  public pipe = new DatePipe('en_US'); // Formatar as datas

  constructor(
    public auth: AngularFireAuth,
    public afs: AngularFirestore,
    private activatedRoute: ActivatedRoute,
    public alert: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.auth.onAuthStateChanged((userData) => {
      if (userData) {
        this.user = userData;
      }
    });
  }
  enviar() {
    this.confirma = {
      vaga: this.id,
      candidato: this.user.uid,
      data: this.pipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss').trim(),
    };

    this.afs
      .collection('candidatar')
      .add(this.confirma)
      .then(() => {
        // Mostra feedback
        this.presentAlert();
      })
      .catch();
  }

  async presentAlert() {
    const alert = await this.alert.create({
      header: `Currículo enviado!`,
      message: 'Seu currículo foi enviado com sucesso...',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.router.navigate(['/home']);
          },
        },
      ],
    });

    await alert.present();
  }
}
