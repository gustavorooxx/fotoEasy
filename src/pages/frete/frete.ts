import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage({
  name: 'frete-page'
})
@Component({
  selector: 'page-frete',
  templateUrl: 'frete.html',
})
export class FretePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FretePage');
  }

}
