import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompleteRegistrationPage } from './complete-registration';

@NgModule({
  declarations: [
    CompleteRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(CompleteRegistrationPage),
  ],
})
export class CompleteRegistrationPageModule {}
