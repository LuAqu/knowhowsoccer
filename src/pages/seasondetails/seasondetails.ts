import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { ScheduledetailsPage } from '../scheduledetails/scheduledetails';

/**
 * Generated class for the SeasondetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seasondetails',
  templateUrl: 'seasondetails.html',
})
export class SeasondetailsPage {

  signupError: string;
    form: FormGroup;

    constructor(
      fb: FormBuilder,
      private navCtrl: NavController,
      private auth: AuthService
    ) {
      this.form = fb.group({
      });
    }

  schedule() {
      this.navCtrl.setRoot(ScheduledetailsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
