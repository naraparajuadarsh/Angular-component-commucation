import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-my-sebling2',
  templateUrl: './my-sebling2.component.html',
  styleUrls: ['./my-sebling2.component.css']
})
export class MySebling2Component implements OnInit {

  constructor(public myservice:MyServiceService) {
    console.log(this.myservice.adarsh)
   }
  
  ngOnInit(): void {
  }

}
