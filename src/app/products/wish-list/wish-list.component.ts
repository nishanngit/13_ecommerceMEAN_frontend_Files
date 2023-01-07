import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  wishlist:any;
  emsg:string='';
  constructor(private api:ApiService, private router:Router) { }


  ngOnInit(): void {
    this.api.getwishlist().subscribe(
      (data:any)=>{
        this.wishlist = data.products
        if(this.wishlist.length==0){
          this.emsg='Empty Wishlist'
        }
      },
      //client error
      (data:any)=>{
        this.emsg = data.error.message
      }
    )
  }


  deletewish(product:any){
    this.api.deletewish(product.id).subscribe(
      (result:any)=>{
        alert(result.message)
   /*      this.router.navigateByUrl('wish-list') */
   window.location.reload()
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }





}
