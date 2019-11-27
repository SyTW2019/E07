import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private net:HttpClient) { }

  login(user: string, pwd: string) {
  	return this.net.post("http://localhost:4300/api/v1/users/login", {
  		user: user,
  		password: pwd
  	})
  }

  register(user: string, pwd: string) {
  	return this.net.post("http://localhost:4300/api/v1/users/register", {
  		user: user,
  		password: pwd
  	})
  }
}
