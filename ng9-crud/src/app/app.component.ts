import { ProductsService } from './services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private productService: ProductsService){}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    this.productService.getAll().subscribe(
      (res) => { console.log(res); },
      (err) => { console.log(err); }
    );
  }


}
