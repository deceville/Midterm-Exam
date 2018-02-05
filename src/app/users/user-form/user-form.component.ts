import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

    user: User = new User();

	constructor(private userSvc: UserService) { }
	createUser() {
	this.userSvc.createUser(this.user)
	this.user = new User() // reset user
	}

}
