import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private common : CommonService, private fb : FormBuilder) { } 

  ngOnInit(){
    this.addRestaurant = this.fb.group({
      name : [''],
      email : [''],
      mobile : [''],
      address : ['']
    })
  }

  createResto(){
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
