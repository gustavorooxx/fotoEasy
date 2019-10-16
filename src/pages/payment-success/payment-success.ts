import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage({
  name: 'payment-success'
})
@Component({
  selector: 'page-payment-success',
  templateUrl: 'payment-success.html',
})
export class PaymentSuccessPage {

  purchaseType = 'delivery';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentSuccessPage');
  }

  goToQuiosques(){
    this.navCtrl.setRoot('quiosques-page')
  }
  goToOrders(){
    this.navCtrl.setRoot('orders-page')
  }

}
