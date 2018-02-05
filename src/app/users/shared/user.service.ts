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

	createUser(user: User): void  {
	this.users.push(user)
	 .catch(error => this.handleError(error))
	}
	// Update an existing user
	updateUser(key: string, value: any): void {
	this.users.update(key, value)
	 .catch(error => this.handleError(error))
	}
	// Deletes a single user
	deleteUser(key: string): void {
	 this.users.remove(key)
	   .catch(error => this.handleError(error))
	}
	// Deletes the entire list of users
	deleteAll(): void {
	 this.users.remove()
	   .catch(error => this.handleError(error))
	}
	// Default error handling for all actions
	private handleError(error) {
	console.log(error)
	}

}
