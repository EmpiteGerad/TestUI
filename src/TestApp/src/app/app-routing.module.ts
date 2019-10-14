import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetPatientsComponent } from './get-patients/get-patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';


const routes: Routes = [
  {
    path: 'patients',
    component: GetPatientsComponent
  },
  {
    path: 'patient/add',
    component: AddPatientComponent
  },
  {
    path: 'patient/edit/:id',
    component: EditPatientComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
