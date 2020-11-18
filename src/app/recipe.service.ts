import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Recipe } from './classes/Recipe';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  getrecipe() {

    let hed = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    return this.http.get("http://localhost:57787/api/User/getallrecipe")


  }
  getCategory() {
    let hed = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    return this.http.get("http://localhost:57787/api/User/getallCategory")
  }


  addRecipe(user: Recipe) {

    let hed = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post("http://localhost:57787/api/User/addRecipe", user)

  }
  saveEdit(user: Recipe) {
    console.log(user);
    let hed = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
debugger;
    return this.http.post("http://localhost:57787/api/User/Edit", user)
    debugger;

  }
  constructor(public http: HttpClient) { }
}
