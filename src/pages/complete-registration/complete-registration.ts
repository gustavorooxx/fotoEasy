import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage({
  name: 'complete-registration'
})
@Component({
  selector: 'page-complete-registration',
  templateUrl: 'complete-registration.html',
})
export class CompleteRegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompleteRegistrationPage');
  }

}
