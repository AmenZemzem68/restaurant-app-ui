import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersModalPage } from './orders-modal.page';

describe('OrdersModalPage', () => {
  let component: OrdersModalPage;
  let fixture: ComponentFixture<OrdersModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrdersModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
