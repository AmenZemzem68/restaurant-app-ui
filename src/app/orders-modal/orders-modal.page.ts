import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-orders-modal',
  templateUrl: './orders-modal.page.html',
  styleUrls: ['./orders-modal.page.scss'],
})
export class OrdersModalPage {
  @Input() orders: {
price: any; product: string, quantity: number 
}[] = [];

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }
  calculateTotalPrice(): number {
    return this.orders.reduce((total, order) => total + (order.quantity * order.price), 0);
  }
  
}
