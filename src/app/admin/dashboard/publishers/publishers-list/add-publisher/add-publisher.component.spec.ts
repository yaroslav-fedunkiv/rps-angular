import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPublisherComponent } from './add-publisher.component';

describe('ModalAddPublisherComponent', () => {
  let component: AddPublisherComponent;
  let fixture: ComponentFixture<AddPublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPublisherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
