import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../mock/productList';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ProductListService {
  constructor(private http: HttpClient) {}

  async getProducts(): Promise<Product[]> {
    return lastValueFrom(
      this.http.get<Product[]>('http://localhost:3000/products')
    );
  }
}
