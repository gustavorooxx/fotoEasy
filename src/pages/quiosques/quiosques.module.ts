import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuiosquesPage } from './quiosques';

@NgModule({
  declarations: [
    QuiosquesPage,
  ],
  imports: [
    IonicPageModule.forChild(QuiosquesPage),
    ComponentsModule
  ],
})
export class QuiosquesPageModule {}
