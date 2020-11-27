import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'projects/product-app-boot/product';
import { ProductService } from 'projects/product-app-boot/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  msg: any;

  constructor(private service: ProductService, private router: Router,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.msg = this.activatedRoute.snapshot.params[' msg'];
    this.getAllProducts();
  }
  getAllProducts() {
    this.service.getAllProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.log(error);
      }
    );
}
deleteProduct(id: number) {
  this.service.deleteOneProduct(id).subscribe(
    (data) => {
      this.msg = data;
      this.getAllProducts();
    },error=>{
      console.log(error);
      this.msg = 'Unable to delete! contact admin!!';
    });
}
editProduct(id : number) {
  //console.log("Edit Id is=>"+id);
  this.router.navigate(['edit',id]); //Ex: edit/10
}
}
