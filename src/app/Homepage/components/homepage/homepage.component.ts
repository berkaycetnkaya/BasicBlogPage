import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit  {

  constructor() {


  }


  ngOnInit(): void {
    this.isAdminLogin()

  }
  isAdminLogin(){
    if(localStorage.getItem("token")){
      console.log("true")
      return true;
    }
    else{
      console.log("false")
      return false;
    }
  }

}
