import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NavbarService } from 'src/app/Homepage/services/navbar.service';


@Component({
  selector: 'app-navbaradd',
  templateUrl: './navbaradd.component.html',
  styleUrls: ['./navbaradd.component.css']
})
export class NavbaraddComponent implements OnInit {
  userAddForm:FormGroup
  constructor(private formsBuilder:FormBuilder, private navbar:NavbarService, private toastrService:ToastrService ) {

  }


  ngOnInit(): void {
    this.createCarAddForm();
    
  }

  add(){
    if(this.userAddForm.valid){
      let userModel= Object.assign({},this.userAddForm.value)
        this.navbar.add(userModel).subscribe(data=>{
          console.log(data)
          console.log(userModel)
          this.toastrService.success(data.message,"Başarılı")
        },dataError=>{

        if (dataError.error.Errors.length>0){
         console.log(dataError.error.Errors)
         for (let i = 0; i < dataError.error.Errors.length; i++) {
          this.toastrService.error(dataError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")

         }

        }

        })


    }else{
      this.toastrService.error("Formunuz Eksik","Dikkat")
    }



  }

  createCarAddForm(){
this.userAddForm=this.formsBuilder.group({



  title:["",Validators.required],
  content:["",Validators.required],





})
  }

}
