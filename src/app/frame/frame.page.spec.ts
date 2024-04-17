import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FramePage } from './frame.page';

describe('FramePage', () => {
  let component: FramePage;
  let fixture: ComponentFixture<FramePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FramePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
