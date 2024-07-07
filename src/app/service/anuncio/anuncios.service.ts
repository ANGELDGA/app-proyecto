import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anuncios } from '../../models/anuncios';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  rutaGlobal = 'http://localhost:8084/anuncios/'

  constructor(private http:HttpClient) { }


  //crear 
  addAnuncio(anuncios: Anuncios){
      return this.http.post<Anuncios>(this.rutaGlobal + 'add', anuncios,{
        observe: 'response'
      })
  }

  //listar
  getAnuncio(){
    return this.http.get<Anuncios[]>(this.rutaGlobal + 'findAll')
  }

  //actualizar
  updateAnuncio(anuncios: Anuncios){
      return this.http.put<Anuncios>(this.rutaGlobal + 'update', anuncios,{
        observe: 'response'
      })
  }

  deleteAnuncio(id: number){
      return this.http.delete<void>(`${this.rutaGlobal}delete/${id}`);
      //return this.http.delete<void>(`${this.rutaGlobal}delete/${idProduct}`);
  }


}
