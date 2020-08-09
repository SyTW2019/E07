import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users/users.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:string
  public pwd:string

  constructor(private _usersSrv:UsersService, private router:Router) {}

  ngOnInit() {
    let bananat = localStorage.getItem('bananat');
    if(bananat != undefined) {
      this.router.navigate(['chat']);
    }
  }

  login() {
  	this._usersSrv.login(this.user, this.pwd).subscribe(response => {
      let res = response as any;
      let bananat = {};
      bananat['token'] = res.token;
      bananat['username'] = res.user;
      localStorage.setItem('bananat', JSON.stringify(bananat));
      console.log("Login: OK!");
      this.router.navigate(['chat']);
  	}, error => {
  		console.error(error);
  	});
  }

}
