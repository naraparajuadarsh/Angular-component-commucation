import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-my-sebling',
  templateUrl: './my-sebling.component.html',
  styleUrls: ['./my-sebling.component.css']
})
export class MySeblingComponent implements OnInit {

  constructor(public myservice:MyServiceService) {
    this.myservice.adarsh;
   }

  ngOnInit(): void {
  }

}
