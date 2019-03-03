import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.css']
})
export class GstEditComponent implements OnInit {
	
	user: any = {}
	angForm: FormGroup;

  constructor(private route: ActivatedRoute,
	private router: Router,
	private us: UsersService,
	private fb: FormBuilder) {
		this.createForm();
	}
	createForm() {
    this.angForm = this.fb.group({
        name: ['', Validators.required ],
        email: ['', Validators.required ],
        phoneNumber: ['', Validators.required ],
		address: ['', Validators.required ]
      });
    }
	updateUser(name, email, phoneNumber,address) {
   this.route.params.subscribe(params => {
      this.us.updateUser(name, email, phoneNumber,address, params['id']);
      this.router.navigate(['/users']);
		});
	}
  ngOnInit() {
	      this.route.params.subscribe(params => {
        this.us.editUser(params['id']).subscribe(res => {
          this.user = res;
      });
    });
  }

}
