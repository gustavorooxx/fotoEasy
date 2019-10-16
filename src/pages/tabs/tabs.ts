import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
  name: 'tabs-page'

  })

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'home-page';
  tab2Root = 'quiosques-page';
  tab3Root = 'add-album-page';
  tab4Root = 'orders-page';
  tab5Root = 'profile-page';


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
}
