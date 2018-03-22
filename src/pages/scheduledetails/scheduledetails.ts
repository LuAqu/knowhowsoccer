import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the ScheduledetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scheduledetails',
  templateUrl: 'scheduledetails.html',
})
export class ScheduledetailsPage {

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
