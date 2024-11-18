import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSimCardPage } from './add-simcard.page';

describe('AddSimCardPage', () => {
  let component: AddSimCardPage;
  let fixture: ComponentFixture<AddSimCardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSimCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
