import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $(document).on('scroll', function () {
        if ($(window).scrollTop() > 300) {
          $('.header').addClass('change-color');
        } else {
          $('.header').removeClass('change-color');
        }
      });
    });
  }

}
