import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent {

  constructor(private router:Router,private toastrService:ToastrService) {


  }

  LogOff(){
    localStorage.removeItem("token");
    this.toastrService.error("Çıkış yaptınız.")


  }
}
