import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Navbar } from '../models/navbar';
import { NavListResponseModel } from '../models/navListResponseModel';
import { NavResponseModel } from '../models/navResponseModel';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private http:HttpClient) { }

Url="https://localhost:7214/api/Navbar/"
  getNavbars():Observable<NavListResponseModel<Navbar>>{
    let newPath=this.Url+"getall"

 return this.http.get<NavListResponseModel<Navbar>>(newPath)
  }

  add(nav:Navbar):Observable<NavResponseModel>{
    let newPath=this.Url+"add"
    return this.http.post<NavResponseModel>(newPath,nav)

  }
  delete(nav:Navbar):Observable<NavResponseModel>{
    let newPath=this.Url+"delete"
    return this.http.post<NavResponseModel>(newPath,nav)

  }

}
