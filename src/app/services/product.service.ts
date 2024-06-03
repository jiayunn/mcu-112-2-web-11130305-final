import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _data = [
    new Product({
      id: 1,
      name: 'A 產品',
      authors: ['作者 A', '作者 B', '作者 C'],
      company: '博碩文化',
      isShow: true,
      isSale: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
    new Product({
      id: 2,
      name: 'B 產品',
      authors: ['作者 A', '作者 B', '作者 C'],
      company: '博碩文化',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
    new Product({
      id: 3,
      name: 'C 產品',
      authors: ['作者 A', '作者 B', '作者 C'],
      company: '博碩文化',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
    new Product({
      id: 4,
      name: 'D 產品',
      authors: ['作者 A', '作者 B', '作者 C'],
      company: '博碩文化',
      isShow: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
  ];

  getList(name: string | undefined, pageIndex: number, pageSize: number): Observable<Product[]> {
    return of(this._data).pipe();
  }

  getById(productId: number): Observable<Product> {
    const product = this._data.find(({ id }) => id === productId)!;
    return of(product);
  }

  getCount(name?: string): Observable<number> {
    throw new Error('NO');
  }
}
