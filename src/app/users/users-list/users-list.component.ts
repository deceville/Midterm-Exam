import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

    public users: FirebaseListObservable<User[]>;

	constructor(private userSvc: UserService) { }
	ngOnInit() {
	this.users = this.userSvc.getUsersList({limitToLast: 5})
	}
	deleteUsers() {
	this.userSvc.deleteAll()
	}

}
