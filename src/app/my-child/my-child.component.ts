import { Component, Input, OnInit,Output,EventEmitter} from '@angular/core';



@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.css']
})
export class MyChildComponent {

  name:string="";
  @Input() phone:number=123;
  @Output() parentFunction:EventEmitter<any>=new EventEmitter()
  
  constructor() {
    
  }

  valuechange() {
    this.parentFunction.emit(this.name);
  }

}
