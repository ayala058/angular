import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from '../classes/User';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { LoginService } from '../login.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myform: FormGroup;
  u: User;
  constructor(public ser: RegisterService) {
    this.myform = new FormGroup({
      'name': new FormControl("", Validators.required),
      'address': new FormControl("", Validators.required),
      'user': new FormControl("", Validators.required),
      'password': new FormControl("",
        Validators.compose([Validators.required, Validators.minLength(6)
        ]))
    })
  }
  save() {
    this.u = new User(this.myform.controls['name'].value, this.myform.controls['address'].value, this.myform.controls['user'].value,
    //  this.myform.controls['user'].value,
      this.myform.controls['password'].value);
    this.myform.reset();
    debugger
    this.ser.sendregister(this.u).subscribe(suc => {
   alert("ההרשמה בוצעה בהצלחה, כעט תוכלו להיכנס")
    },
      err => console.log(err));
  }

  ngOnInit() {
  }

}
