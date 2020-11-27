import { Component, OnInit } from '@angular/core';
import { Product } from 'projects/product-app-boot/product';
import { ProductService } from 'projects/product-app-boot/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  message: any;
  product: Product;

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.product = new Product();
  }

  createProduct() {
    this.service.createProduct(this.product).subscribe(
      (data) => {
        //send message to UI
        this.message=data;
        //clear form data
        this.product = new Product();
      },
      (error) => {
        this.message = 'Unable to Save Data!';
        console.log(error);
      }
    );
  }

}
