import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private net:HttpClient) {}

  register(mail: string, name: string, surname: string, pwd: string, birthday: number) {
  	return this.net.post("http://localhost:4300/api/v1/users/register", {
  		user: name + ' ' + surname,
  		mail: mail,
  		password: pwd,
  		birthday: birthday
  	})
  }

  login(mail: string, pwd: string) {
    return this.net.post("http://localhost:4300/api/v1/users/login", {
      mail: mail,
      password: pwd
    })
  }
}


