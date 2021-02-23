import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {

  collections : any = [];
  allusers: any = [];
  alert : boolean = false;
  addRestaurant : any = FormGroup

  constructor(private common : CommonService, private fb : FormBuilder) { }

  ngOnInit() {

    this.addRestaurant = this.fb.group({
      name : [''],
      email : [''],
      mobile : [''],
      address : ['']
    })

    this.getlatest();
    this.common.getlistresto().subscribe((result) => {
      this.collections = result;
      console.log(this.collections);
    })
  }

  getlatest(){
    this.common.getLatestUsers().subscribe((result) => {
      this.allusers = result;
      console.log(this.allusers);
    })
  }

  deleteResto(resto : any){
    this.collections.splice(resto.id,1)
    this.common.deleteResto(resto).subscribe((result)=>{
      console.log("Data is Deleted Successfull !", result)
      this.showAlert();
      this.getlatest();
      this.addRestaurant.reset();
      resto = '';
    })
  }

  showAlert(){
    this.alert = true;
    setTimeout(()=> this.alert = false,1500)
}

  alertClose(){
    this.alert = false;
  }
}
