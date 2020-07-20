import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users/users.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public mail:string;
  public pwd:string;
  public name:string;
  public surname:string;

  constructor(private _userSrv:UsersService) {}

  ngOnInit() {
  }

  register() {
  	this._userSrv.register(this.mail, this.name, this.surname, this.pwd).subscribe(response => {
  		console.log("Register: OK!")
  	}, error => {
  		console.error(error)
  	})
  }
}
