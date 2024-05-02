import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  productName = 'A 產品';
  authors = '作者 A、作者 B、作者 C';
  company = '博碩文化';
  price = '';
  isShow = true;
  imgUrl = 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img';
}
