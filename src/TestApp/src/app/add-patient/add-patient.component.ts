import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';  

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  public maxDate : any;
  angForm: FormGroup;  
  constructor(private fb: FormBuilder) {  
    this.createForm();
    var today =  new Date();
    this.maxDate = {year: today.getFullYear(), month: today.getMonth(), day: today.getDate()}
  }  
  createForm() {  
    this.angForm = this.fb.group({  
      PatientName: ['', Validators.required ],
      PatientGender: ['', Validators.required ],
      PatientDob: ['', Validators.required ],
      PatientNid: ['', Validators.required ]
    });  
  }
  ngOnInit() {
  }

}
