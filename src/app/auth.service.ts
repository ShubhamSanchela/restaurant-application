import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email!: string;
  password!: string;
  router: any;

  constructor() { }

  adminRights()  {
    return true
  }

}
