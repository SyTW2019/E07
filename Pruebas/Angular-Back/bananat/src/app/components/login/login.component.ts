import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users/users.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public mail:string
  public pwd:string

  constructor(private _usersSrv:UsersService) { }

  ngOnInit() {
  }

  login() {
  	this._usersSrv.login(this.mail, this.pwd).subscribe(response => {
  		let token = response as any
      localStorage.setItem("token", token.token)
      console.log("Login: OK!")
  	}, error => {
  		console.error(error)
  	})
  }

}
