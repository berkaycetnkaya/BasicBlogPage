import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NavListResponseModel } from '../models/navListResponseModel';
import { NavResponseModel } from '../models/navResponseModel';
import { SelectedNav } from '../models/selectedNav';
import { NavSingleResponseModel } from '../models/singleResponseModel';



@Injectable({
  providedIn: 'root'
})
export class SelectednavService {

  constructor(private http:HttpClient) { }
// https://localhost:7214/api/SelectedNavbar/add
Url="https://localhost:7214/api/SelectedNavbar/"

//https://localhost:7214/api/SelectedNavbar/getall
  getNavbars():Observable<NavListResponseModel<SelectedNav>>{
    let newPath=this.Url+"getall"

 return this.http.get<NavListResponseModel<SelectedNav>>(newPath)
  }

  add(nav:SelectedNav):Observable<NavResponseModel>{
    let newPath=this.Url+"add"
    return this.http.post<NavResponseModel>(newPath,nav)

  }
  delete(nav:SelectedNav):Observable<NavResponseModel>{
    let newPath=this.Url+"delete"
    return this.http.post<NavResponseModel>(newPath,nav)

  }

  getbyid(id:number):Observable<NavSingleResponseModel<SelectedNav>> {


    //https://localhost:7214/api/SelectedNavbar/getbyid?id=8
    let newPath=this.Url+"getbyid?id="+id
    //https://localhost:7214/api/SelectedNavbar/getbyid?id=2003

    return  this.http.get<NavSingleResponseModel<SelectedNav>>(newPath)
    }

}
