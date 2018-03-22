import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeasondetailsPage } from './seasondetails';

@NgModule({
  declarations: [
    SeasondetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SeasondetailsPage),
  ],
})
export class SeasondetailsPageModule {}
