import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from '../classes/User';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { LoginService } from '../login.service';
import { RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform: FormGroup;
  user: User;
  userCode;

  constructor(public ser: LoginService, public router: Router) {

    this.myform = new FormGroup({
      'user': new FormControl("", Validators.required),
      'password': new FormControl("",
        Validators.compose([Validators.required, Validators.minLength(6)
        ]))
    })


  }
  login() {

    this.user = new User( this.myform.controls['user'].value, this.myform.controls['password'].value, "Gbs", "gbd");
    this.myform.reset();

    this.ser.sendlogin(this.user)
      .subscribe(suc => {
        console.log(suc)
        if (suc <200) {
          alert("ברוך הבא");
          let str = JSON.stringify(this.user);
          sessionStorage.setItem("User", str);
          let str2 = JSON.stringify(suc);
          sessionStorage.setItem("userCode", str2);
   
       
        }
        if (suc == 200) { alert("סיסמא שגויה") }
        if (suc == 300) {
          this.router.navigate(["register"])

        }
        if(suc<200){
          
        }


      },
        err => {
          alert("err");
          console.log(err)
        });
  }
  ngOnInit()
    : void {

  }

}
