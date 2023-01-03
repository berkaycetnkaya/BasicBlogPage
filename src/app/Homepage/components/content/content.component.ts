import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SelectedNav } from '../../models/selectedNav';
import { SelectednavService } from '../../services/selectednav.service';
import { SharingService } from '../../services/sharing.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
 navbars:SelectedNav[]=[]

  constructor(private selected:SelectednavService,private toasterService:ToastrService, private sharing:SharingService) {
    

  }
  
  ngOnInit(): void {
    // this.getContent();
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
    
  }

}
