import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  constructor() { }

  sayi2:number;
 
 
 
  setId(sayi:number){
this.sayi2=sayi
return this.sayi2
  }
  getId(){

  
    return this.sayi2;
  }
}
