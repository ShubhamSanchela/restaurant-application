import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from "@angular/forms"

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: any = FormGroup;
  fullNameLength = 0;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullname : ['', [Validators.required , Validators.minLength(2), Validators.maxLength(15) ]],
      email : [''],
      skills : this.fb.group({
        skillName : [''],
        experienceInYears : [''],
        proficiency : ['']
      })
    });

    this.employeeForm.get('fullname').valueChanges.subscribe((value: any) => {
      this.fullNameLength = value
      // console.log(value)
    })
  }

  logKeyValuePairs(group : FormGroup){
    Object.keys(group.controls).forEach((key: string) => {
      let abstractControl = group.get(key);
      if(abstractControl instanceof FormGroup) {
        this.logKeyValuePairs(abstractControl);
      }else{
        abstractControl?.disable();
      }
    })
  }

  onLoadDataClick(){
    this.employeeForm.setValue({
      fullname : "Shubham Sanchela",
      email : "abc@gmail.com",
      skills : {
        skillName : "Angular",
        experienceInYears : 1,
        proficiency : 'intermediate'
      }
    })
  }

  disableData(){
    this.logKeyValuePairs(this.employeeForm);
  }

  onSubmit(){
    console.log(this.employeeForm.value);
    this.employeeForm.reset();
  }

}
