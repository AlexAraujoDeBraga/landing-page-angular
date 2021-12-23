import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  display: string = '';
  click: boolean = true;

  caracter: any;
  anulaScrollProduct: boolean = false;
  anulaScrollResumo: boolean = false;

  constructor(private router: Router) { }

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

  menuClick() {
    if (this.click) {
      this.display = 'block';
      this.click = false;
    }
    else {
      this.display = 'none';
      this.click = true;
    }
  }


  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrollProduct() {
    !this.anulaScrollProduct ? window.scrollBy({ top: 1380, left: 0, behavior: "smooth" })
      : window.scrollBy({ top: -1380, left: 0, behavior: "smooth" });
    this.anulaScrollProduct ? this.anulaScrollProduct = false
      : this.anulaScrollProduct = true;
  }

  scrollResumo() {
    !this.anulaScrollResumo ? window.scrollBy({ top: 380, left: 0, behavior: "smooth" })
      : window.scrollBy({ top: -380, left: 0, behavior: "smooth" });
    this.anulaScrollResumo ? this.anulaScrollResumo = false
      : this.anulaScrollResumo = true;
  }

}
