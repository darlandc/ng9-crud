import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getAll() {
    const URL = 'http://localhost:3001/products';
    const headers = new HttpHeaders().set('Authorization', 'my-auth-token');
    return this.http.get(URL, { headers });
  }

}
