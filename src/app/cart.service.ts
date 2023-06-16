import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  /*propriedade para armazenar a matriz dos produtos atuais no carrinho.*/
  items: Product[] = [];

  /* O addToCart()método anexa um produto a uma matriz de items*/
  addToCart(product: Product) {
    this.items.push(product);
  }

  /*getItems()método coleta os itens que os usuários adicionam ao carrinho e retorna cada item com sua quantidade associada*/
  getItems() {
    return this.items;
  }

  /*clearCart()método retorna um array vazio de itens, que esvazia o carrinho*/
  clearCart() {
    this.items = [];
    return this.items;
  }
}
