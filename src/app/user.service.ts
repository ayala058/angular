import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  func()
  {
    return this.http.get("http://localhost:57787/api/User/Func1");

  }

  constructor(public http: HttpClient) { }
}
