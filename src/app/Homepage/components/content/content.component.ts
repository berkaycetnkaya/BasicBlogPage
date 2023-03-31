import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SelectedNav } from '../../models/selectedNav';
import { SelectednavService } from '../../services/selectednav.service';
import { SharingService } from '../../services/sharing.service';
import { HomePageNavComponent } from '../home-page-nav/home-page-nav.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

@ViewChild(HomePageNavComponent) private childpage:HomePageNavComponent

  data=false;
  navbars:SelectedNav;
 href:string="";
  strarray:object;
  content : string[]=[]
  content2:string
  constructor(private selected:SelectednavService,private toasterService:ToastrService, private sharing:SharingService,private router:Router) {
    

  }
  
  ngOnInit(): void {
    // this.getContent();
    this.mükemmelmethod();
this.getSelectedId();





  }
 

  // getContent(){
  // let a = this.sharing.sayı2
  // this.selected.getbyid(a).subscribe(response=>{
  //   response.data=this.navbars
  //   this.toasterService.success(response.message)
  // })
  // }

  getSelectedId(){
    let a =this.sharing.getId()
    console.log(a+" bu a")
    console.log(this.router.getCurrentNavigation()+"bu 2. konsol")
this.strarray = this.router.getCurrentNavigation()
  console.log(this.strarray)
  console.log(this.navbars)
  }
  getcontent(){

  }
  mükemmelmethod(){
    
    
      this.href = this.router.url;
      console.log(this.router.url+" bu oninit");
      let a =this.href.split("/")
      console.log(a[a.length-1])
      let b =a[a.length-1]
      
      console.log(b)
      this.selected.getbyid(parseInt(b)).subscribe(response=>{
       this.navbars=response.data
       console.log(this.navbars)
       this.data=true
       console.log(this.sharing.sayi3+"bu sharing")

       // bu duzelecek
       
       
       
       
      
      
      })
      
     

    
   
  }

}
