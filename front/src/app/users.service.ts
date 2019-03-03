import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  uri = 'http://localhost:8000/api/users';
  constructor(private http: HttpClient) { }
  addUsers(name, email, phone,address) {
    const obj = {
        name: name,
        email: email,
        phoneNumber: phone,
		address:address
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj)
        .subscribe(res => console.log('Done'));
  }
  	getUsers() {
    return this
           .http
           .get(`${this.uri}`);
  }
  editUser(id) {
    return this
            .http
            .get(`${this.uri}/${id}`);
    }
  updateUser(name, email, phoneNumber,address, id) {

    const obj = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
		address:address
      };
    this
      .http
      .put(`${this.uri}/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
  deleteUser(id) {
    return this
              .http
              .delete(`${this.uri}/${id}`)
			  .subscribe((s) => {
				console.log(s);
				});
  }
}
