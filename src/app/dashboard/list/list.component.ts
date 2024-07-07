import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../service/products/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MaterialModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  dataSource: any[] = [];
  displayedColumns: string[] = ['description', 'namePdt', 'price', 'img', 'category','discount'];

  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(
      (data: any[]) => {
        this.dataSource = data;
      },
      (error) => {
        console.error('Error fetching products: ', error);
      }
    )
  };

}
