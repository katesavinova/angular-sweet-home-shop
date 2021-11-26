import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDitailsComponent } from './card-ditails.component';

describe('CardDitailsComponent', () => {
  let component: CardDitailsComponent;
  let fixture: ComponentFixture<CardDitailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDitailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDitailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
