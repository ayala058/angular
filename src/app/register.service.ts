
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { User } from './classes/User';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  sendregister(user: User)
  {
    // let hed = { headers: new HttpHeaders({
    //   'Content-Type': 'application/json',
    // })
    // }
  
    return this.http.post("http://localhost:57787/api/User/adduser", user)

  }
  constructor(public http: HttpClient) { }
}
