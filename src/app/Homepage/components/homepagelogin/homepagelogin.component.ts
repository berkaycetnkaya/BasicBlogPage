import { Component, OnInit } from '@angular/core';

import { FormControl,FormGroup,Validators,FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-homepagelogin',
  templateUrl: './homepagelogin.component.html',
  styleUrls: ['./homepagelogin.component.css']
})
export class HomepageloginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private authService:AuthService,private toastrService:ToastrService,private router:Router) {


  }


  ngOnInit(): void {
    this.createLoginForm();
  }

createLoginForm(){
this.loginForm=this.formBuilder.group({
  email:["",Validators.required],
  password:["",Validators.required]
})
}
isLoginSuccess(){
  if (localStorage.getItem("key")){
    this.router.navigate(["adminpanel"])
  }
}
login(){
  if(this.loginForm.valid){
    console.log(this.loginForm.value);
    let loginModel=Object.assign({},this.loginForm.value)
    this.authService.login(loginModel).subscribe(response=>{
      this.toastrService.info("Giriş Yaptınız")
      localStorage.setItem("token",response.data.token)
      console.log(response)


      // localstorage'ı servislerin içine taşı
      //localstorage client'ın hafızasında bizim tokeni tutuyor
    },responseError=>{
      console.log(responseError)
      this.toastrService.error(responseError.message.error)
    } )

  }
  this.isLoginSuccess();


}






}
