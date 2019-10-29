import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
  name: 'edit-photos'
})
@Component({
  selector: 'page-edit-photos',
  templateUrl: 'edit-photos.html',
})
export class EditPhotosPage {

  tabSelected: string = 'ajuste';
  btnsAjuste: any = '';
  btnsTexto: any = '';
  btnsFiltro: any = '';
  btnsMoldura: any = '';
  btnsEstilo: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPhotosPage');
  }

}
