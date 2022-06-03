import { Component, OnInit } from '@angular/core';
import { DependencyService } from './dependency.service';

@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.component.html',
  styleUrls: ['./dependency.component.css']
})
export class DependencyComponent implements OnInit {
   title = 'Hello World';
   city:any ;
  constructor() { 
    let cityservice = new DependencyService();
    this.city = cityservice.getcity();
    console.log(this.city);
  }

  ngOnInit(): void {
  }

}
