import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { ProductService } from '../../service/products/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {

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
