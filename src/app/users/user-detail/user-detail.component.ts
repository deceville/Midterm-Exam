import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

    @Input() user: User;

	constructor(private userSvc: UserService) { }

	updateTimeStamp() {
	let date = new Date().getTime()
	this.userSvc.updateUser(this.user.$key, { timeStamp: date })
	}
	updateActive(value: boolean) {
	this.userSvc.updateUser(this.user.$key, { active: value })
	}
	deleteUser() {
	this.userSvc.deleteUser(this.user.$key)
	}

}
