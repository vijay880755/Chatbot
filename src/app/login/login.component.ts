import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login.model';
import { Router } from '@angular/router';
import {LoginService} from '../services/login/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService:LoginService, private router : Router) { }

  ngOnInit() {
  }
loginUser(username,password){
  console.log(username.value);
  console.log(password.value);
  let login=new Login(username.value,password.value);
  console.log(login);
  this.loginService.login(login).subscribe(res => {
    console.log(res)
    alert("OooLa *** Lets Explore the Chatbot!!!!")
    this.router.navigateByUrl('chat')
  },err => {
    alert("Unfortunately U dont have access to our Chatbot....")
    console.log(err)
  })
}
  }