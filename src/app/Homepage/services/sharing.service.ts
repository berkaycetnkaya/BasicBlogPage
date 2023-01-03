import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  constructor() { }

  sayı2:number;
  setId(sayı:number){
this.sayı2=sayı
return this.sayı2
  }
  getId(){

  
    return this.sayı2;
  }
}
