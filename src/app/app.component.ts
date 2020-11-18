import { Component } from '@angular/core';
import { User } from './classes/User';
import { UserService } from './user.service';
import { AllReciprComponent } from './all-recipr/all-recipr.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  constructor ( public ser:UserService,public r:Router){
    let str=JSON.stringify("");
    sessionStorage.setItem("User", str);
    };
  
  aaa(){
this.ser.func().subscribe(suc=>console.log(suc),
err=>console.log(err));


  }
  addRecipe(){
    console.log( sessionStorage.getItem("User"));  
    if (JSON.parse(sessionStorage.getItem("User")).mail != undefined) { 
         this.r.navigate(["addRecipe"]);

    }
    else
     alert("יש צורך בכניסה לאתר או בהרשמה");

  }
  event(y){
    console.log("app",y)
  }
}
