import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'gmaps';

  position = {
    lat: -9.554206120778657,
    lng: -35.753720294188966
  };

  label = {
    color: 'black',
    text: 'Sennay Auto Elétrica'
  }

  constructor() { }

  ngOnInit(): void {

  }

}
