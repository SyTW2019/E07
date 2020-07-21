import { Component, OnInit } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';
declare var require: any

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
})
export class RegisterComponent implements OnInit {

  google_image = './assets/img/google_icon.png';
  constructor() { }

  ngOnInit() {
  }

}
