import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  key:string="loginData" ;

  set(data: any): void {
    try {
      localStorage.setItem(this.key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get():any {
    try {
      let data= localStorage.getItem(this.key);
      if (data!=null){
        return JSON.parse(data);
      }
      return [];

    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
}
