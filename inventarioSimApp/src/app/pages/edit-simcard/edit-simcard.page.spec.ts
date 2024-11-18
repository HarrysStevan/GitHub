import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditSimCardPage } from './edit-simcard.page';

describe('EditSimCardPage', () => {
  let component: EditSimCardPage;
  let fixture: ComponentFixture<EditSimCardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSimCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
