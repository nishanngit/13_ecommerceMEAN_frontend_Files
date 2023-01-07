import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  searchterm:string='';

  allproducts:any=[]; //array data holding all the products
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe(
      (data:any)=>{
        this.allproducts=data.Products
      }
    )
    this.api.searchkey.subscribe(
      (data:any)=>{
        this.searchterm=data
      }
    )
  }

  addtowishlist(product:any){
this.api.addtowishlist(product).subscribe(
  (result:any)=>{
    alert(result.message)//Product Added Successfully
  },
  (result:any)=>{
    alert(result.error.message)//Already exist
  }
)
  }

}
