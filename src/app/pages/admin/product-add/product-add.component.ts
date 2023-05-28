import { Component } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/Product';
@Component({
    selector: 'app-product-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent {
    productForm = this.formBuilder.group({
        name: '',
        price: [0],
    });
    constructor(
        private formBuilder: FormBuilder,
        private productService: ProductService
    ) {}
    onHandleSubmit() {
        if (this.productForm.invalid) {
            return;
        }

        const product = {
            name: this.productForm.value.name || '',
            price: this.productForm.value.price || 0,
        };
        this.productService.addProduct(product).subscribe((data) => {});
    }
}
