import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

searchkey = new BehaviorSubject('')
//To Share stream of Data

  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get('http://localhost:3000/all-products') //products json data
  }

  //addtowishlist
  addtowishlist(product:any){
    const body={
      id:product.id,
      title:product.title,
      price:product.price,
      description:product.description,
      image:product.image,
    }
    return this.http.post('http://localhost:3000/addtowishlist', body) //products json data
  }


  //get wishlist details
getwishlist(){
  return this.http.get('http://localhost:3000/getwishlist')
}


//get wishlist details
deletewish(id:any){
  return this.http.delete('http://localhost:3000/deletewish/'+id)
}


}
