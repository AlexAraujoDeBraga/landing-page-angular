import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { produtos } from '../model/product-mock';
import { IProduct } from '../model/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild("divImage") divImage: any;
  styleErro?: boolean;
  produtos: IProduct[] = [];
  errorMessage: string = '';
  displaySpinner: boolean = false;
  miniMapShow: boolean = false;
  largeMapShow: boolean = false;

  fotos = [{ "img": "assets/img/f-6.png" },
  { "img": "assets/img/f-2.jpg" },
  { "img": "assets/img/f-3.jpg" },
  { "img": "assets/img/f-4.jpg" }];

  title = 'gmaps';

  position = {
    lat: -9.554206120778657,
    lng: -35.753720294188966
  };

  label = {
    color: 'black',
    text: 'Sennay Auto Elétrica'
  }

  linkWhatssap() {
    window.location.href = "https://wa.me/+5582988697204/?text=Olá,%20preciso%20de%20um%20orçamento";
  }

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.produtos = this.productService.getProducts();
    this.sizeOfMap();
    console.log(JSON.stringify(this.divImage))
  }

  sizeOfMap() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    if (windowWidth < 450 && windowHeight < 1000) {
      this.miniMapShow = true;
    } else {
      this.largeMapShow = true;
    }
  };

  selectProduto(codProduto: string) {
    this.styleErro = this.productService.selectProduct(codProduto);

    if (this.styleErro) {
      this.router.navigateByUrl('/produtos');
    }
  }

}
