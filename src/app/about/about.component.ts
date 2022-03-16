import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  aboutme ="I am a full stack developer with a passion for learning and building things that help people. I have a background in business and finance, and I am currently working as a software engineer at a startup in Coimbatore.";
  name="srinivasan";
  address="Tamil Nadu, India";
  website="https://srinivasan-portfolio.web.app/";
}
