import { Component, OnInit } from '@angular/core';
import Users from '../Users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {
  
  users: Users[];
  constructor(private us: UsersService) { }
  

  ngOnInit() {
	  this.us
	  .getUsers()
	  .subscribe((data: Users[]) => {
		  this.users = data;
	  });
  }
   deleteUser(id) {
    this.us.deleteUser(id);
	this.ngOnInit();
  }

}
