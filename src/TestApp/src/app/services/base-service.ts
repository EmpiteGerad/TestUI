import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {

  constructor () {}

  private _apiUrl: string = null;

  get apiUrl():string {
    if(!this._apiUrl){
      this._apiUrl = 'https://localhost:5001/';
    }
    return this._apiUrl;
}
  getBaseUrl():any {
    return 'https://localhost:5001/';
  }
}