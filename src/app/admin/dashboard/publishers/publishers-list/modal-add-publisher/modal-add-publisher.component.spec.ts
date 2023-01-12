import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddPublisherComponent } from './modal-add-publisher.component';

describe('ModalAddPublisherComponent', () => {
  let component: ModalAddPublisherComponent;
  let fixture: ComponentFixture<ModalAddPublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddPublisherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
