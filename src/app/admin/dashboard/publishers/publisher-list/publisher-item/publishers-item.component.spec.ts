import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishersItemComponent } from './publishers-item.component';

describe('PublisherItemComponent', () => {
  let component: PublishersItemComponent;
  let fixture: ComponentFixture<PublishersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishersItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
