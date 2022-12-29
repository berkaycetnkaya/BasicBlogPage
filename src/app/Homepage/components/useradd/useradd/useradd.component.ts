import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})
export class UseraddComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private authService:AuthService,private toastrService:ToastrService,private router:Router) {


  }
  registerForm:FormGroup
  ngOnInit(): void {
    this.createRegisterForm()
   }


   createRegisterForm(){
     this.registerForm=this.formBuilder.group({
       email:["",Validators.required],
       password:["",Validators.required],
       lastName:["",Validators.required],
       firstName:["",Validators.required]
     })
     }

     register(){
       if(this.registerForm.valid){
         console.log(this.registerForm.value);
         let registerModel=Object.assign({},this.registerForm.value)
         this.authService.register(registerModel).subscribe(response=>{
           this.toastrService.info("Kullanıcı eklendi")
           //localStorage.setItem("token",response.data.token)
           console.log(response)

           // localstorage'ı servislerin içine taşı
           //localstorage client'ın hafızasında bizim tokeni tutuyor
         },responseError=>{
           console.log(responseError)
           this.toastrService.error(responseError.error)
         } )
         //this.router.navigate(["login"])
       }

     }
}
