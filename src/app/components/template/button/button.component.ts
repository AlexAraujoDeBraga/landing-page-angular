import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  linkWhatssap() {
    window.location.href = "https://wa.me/+5582988697204/?text=Olá,%20preciso%20de%20um%20orçamento";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
