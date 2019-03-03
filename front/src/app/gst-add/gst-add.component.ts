import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private us: UsersService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      phone: ['', Validators.required ],
	  address: ['', Validators.required ]
    });
  }
  
  addUsers(name,email,phoneNumber,address){
	this.us.addUsers(name,email,phoneNumber,address);
  }

  ngOnInit() {
  }

}