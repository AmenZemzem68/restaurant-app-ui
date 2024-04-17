import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { OrdersModalPage } from '../orders-modal/orders-modal.page'; 
import {register} from 'swiper/element/bundle' ; 
register(); 
@Component({
  selector: 'app-frame',
  templateUrl: './frame.page.html',
  styleUrls: ['./frame.page.scss'],
})
export class FramePage implements OnInit {
  orders: { product: string, quantity: number, price: number }[] = [];

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  segmentChanged(ev: any) {
    const segmentValue = ev.detail.value;
    const foodContent = document.querySelector('.food-content') as HTMLElement;
    const drinksContent = document.querySelector('.drinks-content') as HTMLElement;

    if (segmentValue === 'food') {
      foodContent.style.display = 'block';
      drinksContent.style.display = 'none';
    } else if (segmentValue === 'drinks') {
      foodContent.style.display = 'none';
      drinksContent.style.display = 'block';
    }
  }

  addToOrders(product: string) {
    const existingOrder = this.orders.find(order => order.product === product);
    if (existingOrder) {
      existingOrder.quantity++;
    } else {
      this.orders.push({ product: product, quantity: 1, price: 10 });
    }
  }

  increaseQuantity(order: { product: string, quantity: number, price: number }) {
    order.quantity++;
  }

  decreaseQuantity(order: { product: string, quantity: number, price: number }) {
    if (order.quantity > 1) {
      order.quantity--;
    }
  }

  removeOrder(order: { product: string, quantity: number, price: number }) {
    const index = this.orders.indexOf(order);
    if (index !== -1) {
      this.orders.splice(index, 1);
    }
  }

  async viewAllOrders() {
    const modal = await this.modalController.create({
      component: OrdersModalPage, // Utilisez OrdersModalPage à la place de OrdersModalComponent
      componentProps: {
        orders: this.orders
      }
    });
    await modal.present();
  }
}