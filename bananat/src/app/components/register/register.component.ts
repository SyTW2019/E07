import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users/users.service';
import { Router } from '@angular/router';


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
  public username:string;

  constructor(private _userSrv:UsersService, private router:Router) {}

  ngOnInit() {
  }

  register() {
  	this._userSrv.register(this.mail, this.name, this.surname, this.pwd, this.username).subscribe(response => {
      console.log("Register: OK!");
      this.router.navigate(['/login']);
  	}, error => {
  		console.error(error);
  	})
  }
}
