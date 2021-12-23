import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  linkWhatssap() {
    window.location.href = "https://wa.me/+5582988697204/?text=Olá,%20preciso%20de%20um%20orçamento";
  }
}
