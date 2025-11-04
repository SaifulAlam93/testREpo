import { Injectable } from '@angular/core';
import { Product } from '../models/model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private productList: Product[] = [
  //   {
  //     id: 1,
  //     name: 'Gaming Mouse',
  //     price: 1499,
  //     category: 'Accessories',
  //     image: 'https://images.unsplash.com/photo-1587202372775-9898a7a13b84'
  //   },
  //   {
  //     id: 2,
  //     name: 'Mechanical Keyboard',
  //     price: 4999,
  //     category: 'Accessories',
  //     image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3'
  //   },
  //   {
  //     id: 3,
  //     name: 'Ultra HD Monitor',
  //     price: 15999,
  //     category: 'Displays',
  //     image: 'https://images.unsplash.com/photo-1587825140708-69ef9d62e5a9'
  //   }
  // ];
  // constructor() { }


  // getProducts(): Product[] {
  //   return this.productList;
  // }


  // getProductById(id: number): Product | undefined {
  //   return this.productList.find(a => a.id === id);
  // }


  // addProduct(product: Omit<Product, 'id'>): void {
  //   const newId = this.productList.length > 0
  //     ? Math.max(...this.productList.map(p => p.id)) + 1: 1;

  //   const newProduct: Product = {
  //     id: newId,
  //     name: product.name,
  //     price: product.price,
  //     category: product.category,
  //     image: product.image
  //   };

  //   this.productList.push(newProduct);
  // }


  // // addProduct2(product: Product): void {
  // //   this.productList.push(product);
  // // }



  // updateProduct(id: number, updatedData: Product): boolean {
  //   const index = this.productList.findIndex(p => p.id === id);//1
  //   if (index !== -1) {
  //     this.productList[index] = updatedData as Product;
  //     return true;
  //   }
  //   return false;
  // }


  // deleteProduct(id: number): boolean {
  //   const index = this.productList.findIndex(p => p.id === id);
  //   if (index !== -1) {
  //     this.productList.splice(index, 1);//1
  //     return true;
  //   }
  //   return false;
  // }




private apiUrl = 'http://localhost:3000/products';

constructor(private http: HttpClient) {}

  getProducts(){
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number) {
        return this.http.get<Product>(this.apiUrl + "/" + id);
  }

  addProduct(product: Product){
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: number, product: Product) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number){
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }



}
