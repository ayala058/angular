import { Component, OnInit } from '@angular/core';
import { Recipe } from '../classes/Recipe';
import { Category } from '../classes/Category';
import { RecipeService } from '../recipe.service';
import { RouterLink, Router } from '@angular/router';
// import { PassThrough } from 'stream';

@Component({
  selector: 'app-all-recipr',
  templateUrl: './all-recipr.component.html',
  styleUrls: ['./all-recipr.component.css']
})
export class AllReciprComponent implements OnInit {
  itsMe: boolean[] = [];
  detail: boolean[] = [];
  i: number = 0;
  allRecipe: Recipe[] = [];
  sortRecipe: Recipe[] = [];
  catgoryList: Category[] = [];
noResult:boolean=false;
  c: string;
  d: number;
  isActive: boolean = true;
  WantIt: boolean = false;
  t: number;
  sortParam: string;
  sortParam2: number;
  Scategory:string="";
  constructor(public ser: RecipeService, public router: Router) {


  }


  ngOnInit() {

    this.ser.getrecipe()
      .subscribe(suc => {
        while (suc[this.i] != null) {
          this.allRecipe.push(suc[this.i]);
          this.i++;
        }
        this.sortRecipe = this.allRecipe;

      },
        err => {

          console.log(err)
        });
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
  details(y) {
console.log(JSON.parse(sessionStorage.getItem("User")).mail)

    if (JSON.parse(sessionStorage.getItem("User")).mail != undefined) {
      if (this.detail[y.code])
        this.detail[y.code] = false;
      else
        this.detail[y.code] = true;
    }
    else {
      alert("יש צורך בכניסה לאתר או בהרשמה")
    }

  }
  counter1(i: number) {
    return new Array(i);
  }
  counter2(i: number) {
    return new Array(5 - i);
  }
  who(y) {
   
    console.log(JSON.parse(sessionStorage.getItem('userCode')));
    console.log(y.userCode)
    if (JSON.parse(sessionStorage.getItem('userCode')) == y.userCode) {
      return true;
    }
    else {
      return false;
    }
  }
  edit(y) {
    if (this.itsMe[y.code] == true) {
      this.itsMe[y.code] = false;
      alert("לא בוצע שינוי")
    }
    else
      this.itsMe[y.code] = true;


  }
  sort() {
    if(this.sortParam==null&&this.sortParam2==null&&this.Scategory==null){
      this.allRecipe=this.sortRecipe;
      this.noResult=false;
    }
    if (this.sortParam) {
      this.allRecipe = [];
this.Scategory=null;
      this.sortRecipe.forEach(element => {
        if (element.name == this.sortParam) {
          this.allRecipe.push(element);
        }
      });
    }
    if (this.sortParam2) {
      this.allRecipe = [];
      this.Scategory=null;
      this.sortRecipe.forEach(element => {
        if (element.duration < this.sortParam2) {
          this.allRecipe.push(element);
        }
      });
    }
    if(this.allRecipe.length==0)
    this.noResult=true;
    if(this.Scategory){
      this.allRecipe = [];
      this.sortRecipe.forEach(element => {
        if (element.category.name ==this.Scategory) {
          this.allRecipe.push(element);
        }
      });
    }
  }

  cancel(y) {

    this.itsMe[y.code] = false;
    alert("לא בוצע שינוי")
    

  }
  click(){
  
    this.ser.getrecipe()
    .subscribe(suc => {
      while (suc[this.i] != null) {
        this.allRecipe.push(suc[this.i]);
        this.i++;
      }
      this.sortRecipe = this.allRecipe;

    },
      err => {

        console.log(err)
      });
  }
}

