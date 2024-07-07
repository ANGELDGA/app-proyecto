import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { RouterOutlet } from '@angular/router';

import { Product } from '../../models/product';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../../service/products/product.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  displayedColumns: string[] = ['idProduct', 'namePdt', 'description', 'price', 'category', 'img', 'discount', 'actions'];
  dataSource = new MatTableDataSource<Product>();
  newProduct: Product = {
    idProduct: 0,
    namePdt: '',
    description: '',
    price: '',
    category: '',
    img: '',
    discount: ''
  };
  editing: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProduct().subscribe((products: Product[]) => {
      this.dataSource.data = products;
    });
  }

  onSubmit(): void {
    if (this.editing) {
      this.productService.actualizarProduct(this.newProduct).subscribe(() => {
        this.loadProducts();
        this.resetForm();
      });
    } else {
      this.productService.crearProduct(this.newProduct).subscribe(() => {
        this.loadProducts();
        this.resetForm();
      });
    }
  }

  editProduct(product: Product): void {
    this.newProduct = { ...product };
    this.editing = true;
  }

  deleteProduct(idProduct: number): void {
    this.productService.eliminarProduct(idProduct).subscribe(() => {
      this.loadProducts();
    });
  }

  resetForm(): void {
    this.newProduct = {
      idProduct: 0,
      namePdt: '',
      description: '',
      price: '',
      category: '',
      img: '',
      discount: ''
    };
    this.editing = false;
  }
}