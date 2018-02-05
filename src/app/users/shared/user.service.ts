import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { User } from './user';

@Injectable()
export class UserService {

	private basePath: string = '/users';

	users: FirebaseListObservable<User[]> = null; //  list of objects
	user: FirebaseObjectObservable<User> = null; //   single object

	constructor(private af: AngularFire,
				private db: AngularFireDatabase) { }


	getUsersList(query={}): FirebaseListObservable<User[]> {
	this.users = this.db.list(this.basePath, {
	query: query
	});
	return this.users
	}
	// Return a single observable user
	getItem(key: string): FirebaseObjectObservable<User> {
	const itemPath =  `${this.basePath}/${key}`;
	this.user = this.db.object(itemPath)
	return this.user
	}

}
