export class Product {
  constructor(initData?: Partial<Product>) {
    Object.assign(this, initData);
  }

  name!: string;

  authors!: string;

  company!: string;

  isShow!: boolean;

  imgUrl!: string;

  price!: number;
}
