import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../service/products/product.service';
import { MaterialModule } from '../../angular-material/material/material.module';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { AnunciosService } from '../../service/anuncio/anuncios.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule, RouterOutlet, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dataSource: any[] = [];
  displayedColumns: string[] = ['description', 'namePdt', 'price', 'img', 'category'];

  dataSource1: any[] = [];
  displayedColumn: String[] = ['img','description']

  // Lista de imágenes para el banner
  slides = [
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnUd9mkxZwKx_QAm85q1E79Eck8IvAgqFBtA&s' },
    { image: 'https://img.freepik.com/psd-gratis/plantilla-banner-web-viernes-negro-super-venta_120329-3843.jpg' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRolukJIL6F0t6yq2PRWx21H3EqP2AgeMcsUg&s' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHDlFMuflQwLE2_9-d_YlBh5xMu1_as05pW0zHZudQRD_4asGzOkUBhBl5knmM7R1Fgwc&usqp=CAU' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR---yCf2qcsI5n-DbnIMXKDZARPern_BEZWg&s' }
  ];
  currentSlide = 0;

  constructor(private productService: ProductService,
    private anunciosService: AnunciosService
  ) {}

  ngOnInit(): void {
    this.productService.getProduct().subscribe(
      (data: any[]) => {
        this.dataSource = data;
      },
      (error) => {
        console.error('Error fetching products: ', error);
      }
    );
    this.anunciosService.getAnuncio().subscribe((data: any[]) =>{
      this.dataSource1 = data;
    },
    (error) => {
      console.error('Error fetching anuncios: ', error);
    }
    )
    
  }



  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateSlidePosition();
  }

  previousSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.updateSlidePosition();
  }

  updateSlidePosition(): void {
    const carouselImages = document.querySelector('.carousel-images') as HTMLElement;
    const slideWidth = carouselImages.clientWidth;
    carouselImages.style.transform =`translateX(-${this.currentSlide * slideWidth}px)`;
  }

}
