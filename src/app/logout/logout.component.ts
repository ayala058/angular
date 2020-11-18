import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  logOut() {
    let str = JSON.stringify(null);
    alert("יציאה בוצעה בהצלחה !");
    sessionStorage.setItem("User", str);
    console.log(sessionStorage.getItem("User"));
  }

}
