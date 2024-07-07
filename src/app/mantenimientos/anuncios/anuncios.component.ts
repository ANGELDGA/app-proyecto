import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../angular-material/material/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { Anuncios } from '../../models/anuncios';
import { AnunciosService } from '../../service/anuncio/anuncios.service';

@Component({
  selector: 'app-anuncios',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './anuncios.component.html',
  styleUrl: './anuncios.component.css'
})
export class AnunciosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'img', 'description','actions'];
  dataSource = new MatTableDataSource<Anuncios>();
  newAnuncios: Anuncios = {
    id: 0,
    img: '',
    description: ''
  };

  editing: Boolean = false;

  constructor(private anuncioService: AnunciosService){

  }

  loadAnuncios():void{
    this.anuncioService.getAnuncio().subscribe((anuncios: Anuncios[]) =>{
      this.dataSource.data = anuncios;
    });
  }
  
  ngOnInit(): void {
     this.loadAnuncios();
  }

  onSubmit():void{
    if(this.editing){
      this.anuncioService.updateAnuncio(this.newAnuncios).subscribe(() =>{
        this.loadAnuncios();
        this.resetForm();
      });
    }else{
      this.anuncioService.addAnuncio(this.newAnuncios).subscribe(() => {
        this.loadAnuncios();
        this.resetForm();
      })
    }
  }

  editProduct(anuncios: Anuncios):void{
    this.newAnuncios = {...anuncios};
    this.editing = true;
  }

  deleteProduct(id: number):void{
    this.anuncioService.deleteAnuncio(id).subscribe(() => {
      this.loadAnuncios();
    })
  }

  resetForm():void{
    this.newAnuncios = {
      id: 0,
      img: '',
      description: ''
    };
    this.editing = false;
  }

}
