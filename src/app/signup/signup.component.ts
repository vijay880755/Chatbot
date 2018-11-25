import { Component, OnInit } from '@angular/core';
import {Signup} from '../models/signup.model';
import {SignupService} from '../services/signup/signup.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupservice:SignupService, private router : Router) { }

  ngOnInit() {
  }
  signup(email,pwd,cpwd){
    let signup:Signup=new Signup(email.value,pwd.value,cpwd.value);
    console.log(signup)
    this.signupservice.signup(signup).subscribe(res => {
      alert("Well we created a new Account")
      console.log(res)
      this.router.navigateByUrl('')
    },err => {
      alert("Better luck next Time !!!")
    console.log(err)
    })
  }

}
