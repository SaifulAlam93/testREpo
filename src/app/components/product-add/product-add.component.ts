import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  product!: FormGroup;
  id: any = null;


  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private acRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.acRoute.snapshot.paramMap.get('id');

    this.product = this.fb.group({
      name: ['', [Validators.required]],
      price: [0, [Validators.required]],
      category: ['', [Validators.required]],
      image: ['', [Validators.required]]
    });

    if (this.id) {
      this.productService.getProductById(this.id).subscribe((value) => {
        this.product.patchValue(value);
      })
    }
  }

  save() {
    console.log(this.product.value);

    if (this.id) {
      this.productService.updateProduct(this.id, this.product.value).subscribe();
    } else {
      this.productService.addProduct(this.product.value).subscribe();
    } 

    this.router.navigate(['/products']);
  }
}
