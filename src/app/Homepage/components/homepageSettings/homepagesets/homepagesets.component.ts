import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Navbar } from 'src/app/Homepage/models/navbar';
import { SelectedNav } from 'src/app/Homepage/models/selectedNav';
import { NavbarService } from 'src/app/Homepage/services/navbar.service';
import { SelectednavService } from 'src/app/Homepage/services/selectednav.service';

@Component({
  selector: 'app-homepagesets',
  templateUrl: './homepagesets.component.html',
  styleUrls: ['./homepagesets.component.css']
})
export class HomepagesetsComponent implements OnInit {
  navs:Navbar[]=[]
  selectednav:SelectedNav[]=[]
  snav:string[]=[]

  @Output() childToParent = new EventEmitter<String>();
 constructor(private nav:NavbarService,private selected:SelectednavService) {


 }



  ngOnInit(): void {
    this.getAllMenü();
    this.getSelectedAllMenü();


  }
  getAllMenü(){
    this.nav.getNavbars().subscribe(response=>{
      this.navs=response.data

    })
  }
  getSelectedAllMenü(){
    this.selected.getNavbars().subscribe(response=>{
      this.selectednav=response.data

    })
  }

  sendToParentNav(name:string){
this.childToParent.emit(name)

if(!this.snav.includes(name)){
  this.snav.push(name)
  console.log("eklendi")
  if(this.snav) {

  }
}



for (const i of this.snav) {
  console.log(i)
}


}


deleted(name:string){
  if(this.snav.includes(name)){
    this.snav.splice(this.snav.indexOf(name))
    console.log("çıkarıldı")
   }


  }
  SendSets(name:string){
    let carModel= Object.assign({},name)

  }
  deleteSelected(name:SelectedNav){
this.selected.delete(name)
  }

}
