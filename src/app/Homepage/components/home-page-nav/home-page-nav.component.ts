import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../models/navbar';
import { SelectedNav } from '../../models/selectedNav';


import { SelectednavService } from '../../services/selectednav.service';
import { SharingService } from '../../services/sharing.service';

@Component({
  selector: 'app-home-page-nav',
  templateUrl: './home-page-nav.component.html',
  styleUrls: ['./home-page-nav.component.css']
})
export class HomePageNavComponent implements OnInit {
 
navselected:Navbar[]=[];

sayı2:number;
  constructor(private selectedNav:SelectednavService,private sharing:SharingService) {


  }
  selectednav:SelectedNav[]=[]
  ngOnInit(): void {
    this.getSelectedAllMenü()
    


  }
  getSelectedAllMenü(){
    this.selectedNav.getNavbars().subscribe(response=>{
      this.selectednav=response.data

    })
  }
  getId(id:number){

this.sharing.setId(id);
console.log(id)
console.log(this.sayı2+"ssayı 2")

  }

  

}
