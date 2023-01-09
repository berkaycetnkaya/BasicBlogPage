import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  sayi3:number;
  constructor() { }
  
 
 
 
  setId(sayi:number){
this.sayi3=sayi
console.log(this.sayi3+"sayı 2 service")
return this.sayi3
  }
  getId(){

  
    return this.sayi3;
  }
}
