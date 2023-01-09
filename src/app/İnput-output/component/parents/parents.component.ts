import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css'],
  //template:'<app child [data]="data"> </app-child>',
})
export class ParentsComponent implements OnInit {

data:string= "this data was passed from parent to this acurrent child component, bu data ana bileşenden alt bileşene yollanıyor"


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  } 

}
