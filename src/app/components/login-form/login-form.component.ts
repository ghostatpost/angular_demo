import { Component, OnInit } from '@angular/core';
import { LogIn } from '../../../interfaces/Login';
@Component({
  selector: 'edureka-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public login : LogIn=
  {
    email:"",password:""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
