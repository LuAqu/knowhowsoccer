import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import { usercreds } from '../models/interfaces/usercreds';

@Injectable()
export class AuthService {
	// private user: firebase.User;

	constructor(public afAuth: AngularFireAuth) {
		// afAuth.authState.subscribe(user => {
		// 	this.user = user;
		// });
	}

	signInWithEmail(credentials: usercreds) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}

	login(credentials: usercreds) {
    var promise = new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(() => {
        resolve(true);
      }).catch((err) => {
        reject(err);
       })
    })

    return promise;

  }

  signUp(credentials) {
	return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

}
