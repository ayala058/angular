import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../classes/Recipe';
import { RecipeService } from '../recipe.service';
import { Category } from '../classes/Category';
// import { EventEmitter } from 'protractor';
// import { Output, EventEmitter } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  @Input()
  recipe: Recipe;

  // @Output() newItemEvent = new EventEmitter<boolean>();
  catgoryList: Category[] = [];
  constructor(public ser: RecipeService) {

  }

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
  saveChange() {
    if (this.recipe.duration > 0) {
      this.ser.saveEdit(this.recipe).subscribe(suc => {
        alert("המתכון עודכן בהצלחה!")
        // this.newItemEvent.emit(true);
      },
        err => { console.log(err) });
    }

  }

}
