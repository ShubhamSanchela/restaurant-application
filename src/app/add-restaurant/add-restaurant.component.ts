import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  alert : boolean = false;
  addRestaurant : any = FormGroup
  isvisible : boolean = true;
  submitted = false;
  loading = false;

  constructor(private common : CommonService, private fb : FormBuilder) { } 

  ngOnInit(){
    this.addRestaurant = this.fb.group({
      name : ['', Validators.required],
      email : ['', Validators.required,],
      mobile : ['', Validators.required],
      address : ['', Validators.required]
    })
  }

  get f() { return this.addRestaurant.controls; }

  createResto(){
    this.submitted = true;
    if (this.addRestaurant.invalid) {
      return
    }
    this.loading = true
    // console.log(this.addRestaurant.value);
    this.common.addResto(this.addRestaurant.value).subscribe((result) => {
       this.showAlert();
      console.log("Add data Successfully", result);
    })
    this.addRestaurant.reset();
  }

  showAlert(){
      this.alert = true;
      setTimeout(()=> this.alert = false,1500)
  } 
   
  alertClose(){
    this.alert = false
  }

}
