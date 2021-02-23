import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-restaurant',
  templateUrl: './login-restaurant.component.html',
  styleUrls: ['./login-restaurant.component.css']
})
export class LoginRestaurantComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private router : Router, private authservice : AuthService) { }

  ngOnInit(){
  }

  logIn(){
    if(this.email == "admin@gmail.com" && this.password == "Admin@123"){
      this.router.navigateByUrl('/home');
    }else{
      alert("Please Enter Valid Details");
    }
  }

  // login(){
  //   this.authservice.adminRights();
  // }

}
