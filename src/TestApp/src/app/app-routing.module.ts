import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { GetPatientsComponent } from './get-patients/get-patients.component';

const routes: Routes = [
  {  
    path: 'patient/add',  
    component: AddPatientComponent  
  },  
  {  
    path: 'patient/edit/:id',  
    component: EditPatientComponent  
  },  
  {  
    path: 'patients',  
    component: GetPatientsComponent  
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
