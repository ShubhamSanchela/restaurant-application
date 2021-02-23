import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register-restaurant',
  templateUrl: './register-restaurant.component.html',
  styleUrls: ['./register-restaurant.component.css']
})
export class RegisterRestaurantComponent implements OnInit {

  alert : boolean = false;
  registerUserForm : any = FormGroup

  constructor(private common : CommonService, private fb : FormBuilder) { } 

  ngOnInit(){
    this.registerUserForm = this.fb.group({
      name : [''],
      email : [''],
      password : [''],
    })
  }

  regUser(){
    console.log(this.registerUserForm.value);
    this.common.createUser(this.registerUserForm.value).subscribe((result) => {
      this.showAlert();
      console.log(result,"User creates successfully");
    })
    this.registerUserForm.reset();
  }

  showAlert(){
    this.alert = true;
    setTimeout(()=> this.alert = false,1500)
  }

  alertClose(){
    this.alert = false
  }

}
