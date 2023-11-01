import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  updateProduct(product: Product) {
    const index = this.products.findIndex(p => p.code === product.code);
    if (index !== -1) {
      this.products[index] = product;
    }
  }

  getProductByCode(code: number): Product | undefined {
    return this.products.find(p => p.code === code);
  }

  deleteProduct(code: number) {
    const index = this.products.findIndex(p => p.code === code);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
