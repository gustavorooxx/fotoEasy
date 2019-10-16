import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
  name: 'meus-albuns-page'
})
@Component({
  selector: 'page-meus-albuns',
  templateUrl: 'meus-albuns.html',
})
export class MeusAlbunsPage {

  step = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeusAlbunsPage');
  }

}
