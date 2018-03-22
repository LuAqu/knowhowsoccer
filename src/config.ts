import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}

export const firebaseConfig = {
	fire: {
		apiKey: 'AIzaSyCCs_S_p0Qz82-ikzHu2U8NGPrekF8O2aw',
		authDomain: 'knowhowsoccer-c1a2d.firebaseapp.com',
		databaseURL: 'https://knowhowsoccer-c1a2d.firebaseio.com',
		projectId: 'knowhowsoccer-c1a2d',
		storageBucket: 'knowhowsoccer-c1a2d.appspot.com',
		messagingSenderId: '682322928080'
	}
};
