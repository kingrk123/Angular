import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'projects/product-app-boot/product';
import { ProductService } from 'projects/product-app-boot/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product = new Product();
  constructor(private service: ProductService, private activatedRoute: ActivatedRoute,private router: Router)
   { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params[' id '];
    this.service.getOneProduct(id).subscribe(data=>{
      this.product= data;
    });
  }
  updateProduct(){
    this.service.updateProduct(this.product)
    .subscribe(data=>{
      console.log(data);
      this.router.navigate(['all']); //goto List page
    });
 }
}
