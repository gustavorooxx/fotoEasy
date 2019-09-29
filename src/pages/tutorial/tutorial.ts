import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
  name: 'tutorial-page'
})
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  step = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

  nextPage(){
    this.step = this.step + 1;
  }

  backPage(){
    this.step = this.step - 1;
  }

  goToHome(){
    this.navCtrl.setRoot('tabs-page')
  }

}
