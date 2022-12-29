import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NavListResponseModel } from '../models/navListResponseModel';
import { NavResponseModel } from '../models/navResponseModel';
import { SelectedNav } from '../models/selectedNav';

@Injectable({
  providedIn: 'root'
})
export class SelectednavService {

  constructor(private http:HttpClient) { }

Url="https://localhost:7214/api/SelectedNavbar/"
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

}
