import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
 // template:'<p>{{data}}</p>'
})
export class ChildComponent implements OnInit {
  @Input() data: string ="this is default data , bu data default gelir"
  
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
