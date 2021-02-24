import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register-restaurant',
  templateUrl: './register-restaurant.component.html',
  styleUrls: ['./register-restaurant.component.css']
})
export class RegisterRestaurantComponent implements OnInit {

  alert: boolean = false;
  registerUserForm: any = FormGroup
  submitted = false;

  constructor(private common: CommonService, private fb: FormBuilder) { }

  // convenience getter for easy access to form fields
  get f() { return this.registerUserForm.controls; }

  ngOnInit() {
    this.registerUserForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  regUser() {
    this.submitted = true;
    if (this.registerUserForm.invalid) {
      return
    }
    console.log(this.registerUserForm.value);
    this.common.createUser(this.registerUserForm.value).subscribe((result) => {
      this.showAlert();
      console.log(result, "User creates successfully");
    })
    this.registerUserForm.reset();
  }

  showAlert() {
    this.alert = true;
    setTimeout(() => this.alert = false, 1500)
  }

  alertClose() {
    this.alert = false
  }

}
