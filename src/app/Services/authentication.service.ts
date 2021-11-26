import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  key: string = 'loginData';

  constructor() {}
  login(username: string, password: string) {
    return this.set(username);
  }
  get(): any {
    try {
      let data = localStorage.getItem(this.key);
      if (data != null) {
        return JSON.parse(data);
      }
      return [];
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(this.key);
  }

  set(data: any): void {
    try {
      localStorage.setItem(this.key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }
}
