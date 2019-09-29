import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeusAlbunsPage } from './meus-albuns';

@NgModule({
  declarations: [
    MeusAlbunsPage,
  ],
  imports: [
    IonicPageModule.forChild(MeusAlbunsPage),
    ComponentsModule
  ],
})
export class MeusAlbunsPageModule {}
