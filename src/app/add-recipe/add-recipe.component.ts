import { Component, OnInit } from '@angular/core';
import { Recipe } from '../classes/Recipe';
import { Category } from '../classes/Category';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RecipeService } from '../recipe.service';
import { disableDebugTools } from '@angular/platform-browser';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  constructor(public ser: RecipeService) {

  }
  input: string = "";
  name: string;
  catgoryList: Category[] = [];
  catgory: Category;
  duration: number;
  difficulty: number;
  data: number;
  pro: string[] = [""];
  pre: string[] = [""];
  picture: string;
  recipe: Recipe;

  ngOnInit() {

    this.allCategory();

  }

  allCategory() {
    return this.ser.getCategory().subscribe(suc => {
      this.catgoryList.push(suc[0]);
      this.catgoryList.push(suc[1]);
      this.catgoryList.push(suc[2]);
      this.catgoryList.push(suc[3]);
    },
      err => {
        console.log(err);
      });
    return null;
  }
  addIngline(s) {
    this.pro.pop();
    this.pro.push(s);
    this.pro.push("");
  }
  trackByFn(index: any, item: any) {
    return index;
  }
  addpreline(s) {
    this.pre.pop();
    this.pre.push(s);
    this.pre.push("");
  }


  addRecipe() {
    this.pre.pop();
    this.pro.pop();

 debugger;

    this.data = Date.now();
    if (this.duration > 0) {
      this.recipe = new Recipe(
        1,
        this.name,
        this.catgoryList[0],
        this.duration,
        this.difficulty,
        11,
        this.pro,
        this.pre,
        JSON.parse(sessionStorage.getItem("User")).code,
        "assets/h.jpg");
      return this.ser.addRecipe(this.recipe).subscribe(suc => {
        alert('The recipe was successfully added!!')


      }, err => {
        console.log("err")

      });
    }

  }


}
