import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../models/navbar';
import { SelectedNav } from '../../models/selectedNav';


import { SelectednavService } from '../../services/selectednav.service';

@Component({
  selector: 'app-home-page-nav',
  templateUrl: './home-page-nav.component.html',
  styleUrls: ['./home-page-nav.component.css']
})
export class HomePageNavComponent implements OnInit {

navselected:Navbar[];
  constructor(private selectedNav:SelectednavService) {


  }
  selectednav:SelectedNav[]=[]
  ngOnInit(): void {


  }
  getSelectedAllMenü(){
    this.selectedNav.getNavbars().subscribe(response=>{
      this.selectednav=response.data

    })
  }

}
