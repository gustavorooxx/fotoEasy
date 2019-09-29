import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
  name: 'add-album-page'
})
@Component({
  selector: 'page-add-album',
  templateUrl: 'add-album.html',
})
export class AddAlbumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAlbumPage');
  }

}
