import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-parent',
  templateUrl: './my-parent.component.html',
  styleUrls: ['./my-parent.component.css']
})
export class MyParentComponent{

  myPhone:number=0;
  name:string="";



  constructor() { }
  
  parentFunction(value:any) {
    this.name=value;
  }
}
