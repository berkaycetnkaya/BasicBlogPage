import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/Car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
 
 
 
 constructor(){
  
 }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  cars:Car[]=[]

}
