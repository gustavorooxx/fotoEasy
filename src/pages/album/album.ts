import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';



@IonicPage({
  name: 'album-page'
})
@Component({
  selector: 'page-album',
  templateUrl: 'album.html',
})
export class AlbumPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,

    ) {


  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Adicionar fotos',



      buttons: [
        {
          text: 'Câmera',
          role: 'camera',
          handler: () => {
            console.log('Camera clicked');
          }
        },{
          text: 'Galeria',
          handler: () => {
            console.log('Galeria clicked');
          }
        },{
          text: 'Facebook',
          handler: () => {
            console.log('Facebook clicked');
          }
        },{
          text: 'Google Fotos',
          handler: () => {
            console.log('Galeria clicked');
          }
        },{
          text: 'Pinterest',
          handler: () => {
            console.log('Galeria clicked');
          }
        },{
          text: 'Instagram',
          handler: () => {
            console.log('Istagram clicked');
          },
        }
      ]
    });
    actionSheet.present();
  }




}
