import { ProductService } from './../services/product.service';
import { Component, inject } from '@angular/core';
import { Product } from '../model/product';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { Router } from '@angular/router';
import { Subject, startWith, switchMap } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, ReactiveFormsModule, ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  router = inject(Router);

  private productService = inject(ProductService);

  protected pageSize = 5;

  pageIndex = 1;

  private readonly refresh$ = new Subject<void>();

  protected readonly formControl = new FormControl<string | undefined>(undefined);

  readonly product$ = this.refresh$.pipe(
    startWith(undefined),
    switchMap(() => this.productService.getList(undefined, 1, 5))
  );

  readonly totalCount$ = this.refresh$.pipe(
    startWith(undefined),
    switchMap(() => this.productService.getCount())
  );

  onView(product: Product): void {
    this.router.navigate(['product', product.id]);
  }
}
