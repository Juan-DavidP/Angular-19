import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServices {

  getUsers(id:any){
    return id
  }

  constructor() { }
}
