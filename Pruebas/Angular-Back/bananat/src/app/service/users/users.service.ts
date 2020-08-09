import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private net:HttpClient) {}

  register(mail: string, name: string, surname: string, pwd: string, username: string) {
  	return this.net.post("http://localhost:4300/api/v1/users/register", {
  		user: name + ' ' + surname,
  		mail: mail,
      password: pwd,
      username: username
  	});
  }

  login(user: string, pwd: string) {
    return this.net.post("http://localhost:4300/api/v1/users/login", {
      user: user,
      password: pwd
    });
  }
}


