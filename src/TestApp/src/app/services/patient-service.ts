import { Injectable } from '@angular/core';  
import { BaseService } from './base-service';

@Injectable()
export class PatientService extends BaseService{  
    private apiAddPatient       = 'api/patient';
    private apiDeletePatient    = 'api/patient';
    private apiUpdatePatient    = 'api/patient';

    constructor() { 
        super();
    }  
}  