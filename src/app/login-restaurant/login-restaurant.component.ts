import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-restaurant',
  templateUrl: './login-restaurant.component.html',
  styleUrls: ['./login-restaurant.component.css']
})
export class LoginRestaurantComponent implements OnInit {

  loginRestaurant : any = FormGroup
  email!: string;
  password!: string;
  private formSubmitAttempt: boolean = false;
  hide = true;

  constructor(private router : Router, private authservice : AuthService, private fb : FormBuilder) { }

  ngOnInit(){
    this.loginRestaurant = this.fb.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  // logIn(){
  //   if(this.email !== "" && this.password !== ""){
  //     this.router.navigateByUrl('/home');
  //   }else{
  //     alert("Please Enter Valid Details");
  //   }
  // }


  onSubmit(){
    if(this.loginRestaurant.valid) {
      this.authservice.login(this.loginRestaurant.value)
    }
    this.formSubmitAttempt = true;
  }

}
