import { Component , OnInit} from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = new Product();
  editingProduct: Product | null = null;

  constructor(private productService: ProductService) {
    //this.newProduct = new Product();
    //this.newProduct.code = 0;
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addProduct() {
    this.productService.addProduct(this.newProduct);
    this.newProduct = new Product();
  }

  editProduct(product: Product) {
    this.editingProduct = { ...product };
  }

  updateProduct() {
    if (this.editingProduct) {
      this.productService.updateProduct(this.editingProduct);
      this.editingProduct = null;
    }
  }

  deleteProduct(code: number) {
    this.productService.deleteProduct(code);
  }
}
