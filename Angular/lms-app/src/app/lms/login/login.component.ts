import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup;
  constructor(private fb:FormBuilder,private router:Router){
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }

  login(){
    if(this.loginForm.valid){
      const uid=this.loginForm.value.username;
      const pwd=this.loginForm.value.password;
      if(uid=="shettygururaj279@gmail.com"&&pwd=="123456789"){
        this.router.navigate(["dashboard"]);
      }
      else{
        alert("Invalid Credentials");
      }
    }
    else{
      alert("Please fill the Fields")
    }
  }
  

}
