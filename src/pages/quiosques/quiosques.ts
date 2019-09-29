import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage({
  name: 'quiosques-page'
})
@Component({
  selector: 'page-quiosques',
  templateUrl: 'quiosques.html',
})
export class QuiosquesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuiosquesPage');
  }

}
