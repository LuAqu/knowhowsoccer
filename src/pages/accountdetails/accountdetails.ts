import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home.page';
import { SeasondetailsPage } from '../seasondetails/seasondetails';
import { AuthService } from '../../services/auth.service';
/**
 * Generated class for the AccountdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accountdetails',
  templateUrl: 'accountdetails.html',
})
export class AccountdetailsPage {

  signupError: string;
  	form: FormGroup;

  	constructor(
  		fb: FormBuilder,
  		private navCtrl: NavController,
      private auth: AuthService
  	) {
  		this.form = fb.group({
  			name: ['', Validators.compose([Validators.required])],
        country: ['', Validators.compose([Validators.required])]
  			// password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  		});
    }

  trainingdetails() {
      this.navCtrl.setRoot(SeasondetailsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
