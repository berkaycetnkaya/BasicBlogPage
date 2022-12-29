import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../models/navbar';

import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-home-page-nav',
  templateUrl: './home-page-nav.component.html',
  styleUrls: ['./home-page-nav.component.css']
})
export class HomePageNavComponent implements OnInit {
navs:Navbar[];
  constructor(private navService:NavbarService) {


  }

  ngOnInit(): void {
    this.getAllMenü()

  }

  getAllMenü(){
    this.navService.getNavbars().subscribe(response=>{
      this.navs=response.data

    })
  }
}
