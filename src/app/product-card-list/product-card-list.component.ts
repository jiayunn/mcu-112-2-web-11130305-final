import { Product } from './../model/product';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-card-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.css',
})
export class ProductCardListComponent {
  product = new Product({
    name: 'A 產品',
    authors: '作者 A、作者 B、作者 C',
    company: '博碩文化',
    isShow: true,
    imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    price: 1580,
  });
}
