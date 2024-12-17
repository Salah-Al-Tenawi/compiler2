// app.component.ts
import { Component } from '@angular/core';

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
  imports: [],
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
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 1000,
      type: 'Electronics',
      imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZ6UU6vkJo-GTWIWQvPGZboJpCSH1LTwdcO5qNDuoSXJh9jNkKlLr2FkGjz2cgu8sU_Gp_RTG8kETMh4XEz9foQ-jZZXVtBquedA69KNY',
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 800,
      type: 'Electronics',
      imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZ6UU6vkJo-GTWIWQvPGZboJpCSH1LTwdcO5qNDuoSXJh9jNkKlLr2FkGjz2cgu8sU_Gp_RTG8kETMh4XEz9foQ-jZZXVtBquedA69KNY',
    },
    {
      id: 3,
      name: 'Shoes',
      price: 120,
      type: 'Fashion',
      imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZ6UU6vkJo-GTWIWQvPGZboJpCSH1LTwdcO5qNDuoSXJh9jNkKlLr2FkGjz2cgu8sU_Gp_RTG8kETMh4XEz9foQ-jZZXVtBquedA69KNY',
    },
  ];

  selectedProduct: Product | null = null;

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }
}