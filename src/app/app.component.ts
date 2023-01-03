import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 dataload=false;
 /**
  *
  */
 constructor(private router:Router) {


 }

  ngOnInit(): void {
    this.fakelogin();


  }
  title = 'Blog';

  fakelogin(){
    localStorage.setItem("token","asdasd")
  }


}
