import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommonService } from '../common.service';
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {


  alert : boolean = false;
  updateRestaurant : any = FormGroup;
  productId = 0;

  constructor(private common : CommonService, private fb : FormBuilder, private route : ActivatedRoute) { } 

  ngOnInit(){
    this.updateRestaurant = this.fb.group({
      name : [''],
      email : [''],
      mobile : [''],
      address : ['']
    })

    console.log(this.route.snapshot.params.id)
    this.common.getCurrentData(this.route.snapshot.params.id).subscribe((result : any) => {
      this.updateRestaurant = this.fb.group({
        name : new FormControl(result['name']),
        email : new FormControl(result['email']),
        mobile : new FormControl(result['mobile']),
        address : new FormControl(result['address']),
      })
      console.log(result)
    })
  }
  
  updateResto(){
   this.common.updateResto(this.route.snapshot.params.id, this.updateRestaurant.value).subscribe((result) => {
     console.log(result,"Data Updated Successfully");
     this.showAlert();
   })
   this.updateRestaurant.reset();
  }

  showAlert(){
    this.alert = true;
    setTimeout(()=> this.alert = false,1500)
  }

  alertClose(){
    this.alert = false
  }
}
