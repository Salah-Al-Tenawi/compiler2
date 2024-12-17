// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // استيراد الوحدة CommonModule

interface Product {
  id: number;
  name: string;
  price: number;
  type: string;
  imageUrl: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="product-list">
        <h3>Products</h3>
        <ul>
          <li *ngFor="let product of products" (click)="selectProduct(product)">
            <img [src]="product.imageUrl" alt="{{ product.name }}" />
            <p>{{ product.name }}</p>
          </li>
        </ul>
      </div>

      <div class="product-details" *ngIf="selectedProduct">
        <h3>Product Details</h3>
        <img [src]="selectedProduct!.imageUrl" alt="{{ selectedProduct!.name }}" />
        <h4>{{ selectedProduct!.name }}</h4>
        <p><strong>Price:</strong> {{ selectedProduct!.price  }}</p>
        <p><strong>Type:</strong> {{ selectedProduct!.type }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        gap: 20px;
      }
      .product-list {
        width: 30%;
        border-right: 1px solid #ddd;
      }
      .product-list ul {
        list-style-type: none;
        padding: 0;
      }
      .product-list li {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px;
        cursor: pointer;
        border-bottom: 1px solid #ddd;
      }
      .product-list img {
        width: 50px;
        height: 50px;
        object-fit: cover;
      }
      .product-details {
        width: 70%;
        padding: 10px;
      }
      .product-details img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        margin-bottom: 20px;
      }
    `,
  ],
})
export class AppComponent {
  products: Product[] =  [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro',
      price: 999,
      type: 'Smartphone',
      imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=iPhone+15+Pro',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23 Ultra',
      price: 1199,
      type: 'Smartphone',
      imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Galaxy+S23+Ultra',
    },
    {
      id: 3,
      name: 'Google Pixel 8 Pro',
      price: 899,
      type: 'Smartphone',
      imageUrl: 'https://via.placeholder.com/150/008000/FFFFFF?text=Pixel+8+Pro',
    },
    {
      id: 4,
      name: 'OnePlus 11',
      price: 699,
      type: 'Smartphone',
      imageUrl: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=OnePlus+11',
    },
    {
      id: 5,
      name: 'Xiaomi 13 Pro',
      price: 799,
      type: 'Smartphone',
      imageUrl: 'https://via.placeholder.com/150/800080/FFFFFF?text=Xiaomi+13+Pro',
    },
    {
      id: 6,
      name: 'Sony Xperia 1 V',
      price: 1299,
      type: 'Smartphone',
      imageUrl: 'https://via.placeholder.com/150/FFC0CB/FFFFFF?text=Xperia+1+V',
    },
  ];
  selectedProduct: Product | null = null;

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }
}