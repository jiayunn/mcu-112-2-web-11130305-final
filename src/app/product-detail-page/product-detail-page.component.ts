import { Component, inject } from '@angular/core';
import { Product } from '../model/product';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent {
  product = new Product({
    id: 1,
    name: 'A 產品',
    authors: ['作者 A', '作者 B', '作者 C'],
    company: '博碩文化',
    isShow: true,
    isSale: true,
    imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    price: 1580,
  });

  private router = inject(Router);

  onBack(): void {
    this.router.navigate(['products']);
  }
}
