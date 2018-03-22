import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Config } from '../config';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AccountdetailsPage } from '../pages/accountdetails/accountdetails';
import { SeasondetailsPage } from '../pages/seasondetails/seasondetails';
import { ScheduledetailsPage } from '../pages/scheduledetails/scheduledetails';
import { AvatarPage } from '../pages/avatar/avatar';

import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';

import { ComponentsModule } from '../pages/components/components.module';
import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
import { HomeModule } from '../pages/home/home.module';
import { SlideBoxModule } from '../pages/slide-box/slide-box.module';
import { WordpressModule } from '../pages/wordpress/wordpress.module';
import { MyApp } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';
import { firebaseConfig } from './app.firebaseconfig';
import { AvatarhandlerProvider } from '../providers/avatarhandler/avatarhandler';
import { UserProvider } from '../providers/user/user';

@NgModule({
	declarations: [
		MyApp,
		LoginPage,
		SignupPage,
		AccountdetailsPage,
		SeasondetailsPage,
		ScheduledetailsPage,
		AvatarPage
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp),
		AgmCoreModule.forRoot(),
    FormsModule,
		ReactiveFormsModule,
		NgxErrorsModule,
		ComponentsModule,
		GoogleMapsModule,
		HomeModule,
		SlideBoxModule,
		WordpressModule,
		AngularFireModule.initializeApp(firebaseConfig.fire)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		LoginPage,
		SignupPage,
		AccountdetailsPage,
		SeasondetailsPage,
		ScheduledetailsPage,
		AvatarPage
	],
	providers: [
		Config,
		StatusBar,
		AuthService,
		AngularFireAuth,
    AvatarhandlerProvider,
    UserProvider,
		File,
		FileChooser,
		FilePath
	]
})
export class AppModule {
}
