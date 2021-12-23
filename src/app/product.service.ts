import { produtos } from './model/product-mock';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { IProduct } from './model/product.model';

@Injectable(
  { providedIn: 'root' }
)
export class ProductService {

  product: IProduct[] = produtos;
  dadosProduto: any;
  produtos: any = [];
  cont: number = 0;

  constructor() { }

  selectProduct(codProduto: string): boolean {
    let ativo: boolean = false;
    this.product.forEach(produto => {
      if (codProduto == produto.codProduto) {
        this.dadosProduto = produto;
        ativo = true;
      }
    });
    return ativo;
  }

  getProduct(): any {
    return this.dadosProduto;
  }

  getProducts(): any {
    this.product.forEach(produto => {
      if (this.cont < this.product.length) {
        this.produtos[this.cont] = produto;
        this.cont++;
      }
    });
    return this.produtos;
  }
}
