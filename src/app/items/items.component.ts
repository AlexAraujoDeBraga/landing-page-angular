import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  produtoMock: any;
  produto: any;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.produto = this.productService.getProduct();
  }

}
