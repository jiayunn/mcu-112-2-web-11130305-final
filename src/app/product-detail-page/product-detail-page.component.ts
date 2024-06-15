import { Component, EventEmitter, inject, Input } from '@angular/core';
import { Product } from '../model/product';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent {
  @Input()
  product!: Product;

  private router = inject(Router);

  private shoppingCartService = inject(ShoppingCartService);

  onBack(): void {
    this.router.navigate(['products']);
  }

  addProduct(): void {
    this.shoppingCartService.addProduct(this.product);
  }
}
