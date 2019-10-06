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


  presentActionSheet2() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Selecione quantas cópias você deseja para esta foto.',



      buttons: [
        {
          text: 'Nenhuma',
          role: 'nenhuma',
          handler: () => {
            console.log('Nenhuma clicked');
          }
        },{
          text: '1',
          handler: () => {
            console.log('1 clicked');
          }
        },{
          text: '2',
          handler: () => {
            console.log('2 clicked');
          }
        },{
          text: '3',
          handler: () => {
            console.log('3 clicked');
          }
        },{
          text: '5',
          handler: () => {
            console.log('5 clicked');
          }
        },{
          text: '10',
          handler: () => {
            console.log('10 clicked');
          },
        }
      ]
    });
    actionSheet.present();
  }

  presentActionSheet3() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'O que você deseja fazer?',



      buttons: [
        {
          text: 'Receber Fotos em Casa',
          role: 'receber Fotos em Casa',
          handler: () => {
            this.navCtrl.push('frete-page')
          }
        },{
          text: 'Retirar Fotos no Quiosque',
          handler: () => {
            this.navCtrl.push('complete-registration')
          },
        }
      ]
    });
    actionSheet.present();
  }



}
