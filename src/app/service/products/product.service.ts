import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  rutaGlobal = 'http://localhost:8085/product/'

  constructor(private http: HttpClient) { }

  //registro
  crearProduct(product: Product){
    return this.http.post<Product>(this.rutaGlobal + 'add', product,{
      observe: 'response'
    })
  }

  //listar
  getProduct(){
    return this.http.get<Product[]>(this.rutaGlobal + 'findAll')
  }
  //puede haber error por el post ->put
  actualizarProduct(product: Product){
    return this.http.put<Product>(this.rutaGlobal + 'update', product,{
      observe: 'response'
    })
  }

  eliminarProduct(idProduct: number){
    return this.http.delete<void>(`${this.rutaGlobal}delete/${idProduct}`);
    //return this.http.delete<Boolean>(this.rutaGlobal + 'delete/{idProducy}',idProduct,{observe: 'response'})
    /*return this.http.post<Boolean>(this.rutaGlobal + 'delete/{idProduct}', idProduct,{
      observe: 'response'
    })*/
  }
 
}
