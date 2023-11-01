import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmedicationsComponent } from './addmedications.component';

describe('AddmedicationsComponent', () => {
  let component: AddmedicationsComponent;
  let fixture: ComponentFixture<AddmedicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmedicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
