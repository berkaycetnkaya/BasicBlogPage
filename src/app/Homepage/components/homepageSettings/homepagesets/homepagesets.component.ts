import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { empty } from 'rxjs';
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
  selectednavi:SelectedNav
 
  snav:string[]=[]
wait=false;
  @Output() childToParent = new EventEmitter<String>();
 constructor(private nav:NavbarService,private selectedservice:SelectednavService,private toast:ToastrService) {


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
    this.selectedservice.getNavbars().subscribe(response=>{
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
this.selectedservice.delete(name)
  }

  navToSelectedNav(nav:SelectedNav){
    
    nav.id=0;
  
    let userModel= Object.assign({},nav.title,nav.content)
  console.log(userModel+"bu usermodel")
  console.log(this.selectednavi+"navi")
  this.wait=true;
  
    console.log(nav)
   
   if(this.wait){

    this.selectedservice.add(nav).subscribe(response=>{
        
        
      this.toast.success(response.message)
      console.log(userModel)
      window.location.reload();
    },error=>{
      this.toast.error(error.error.error)
    })

   }
      
 
  
}
delete(nav:SelectedNav){
this.selectedservice.delete(nav).subscribe(response=>{
  this.toast.success(response.message)
  window.location.reload();
},error=>{
  this.toast.error(error.error.error)
})
}

  }

  


