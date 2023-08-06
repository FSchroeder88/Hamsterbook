import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamstercardComponent } from './hamstercard.component';

describe('HamstercardComponent', () => {
  let component: HamstercardComponent;
  let fixture: ComponentFixture<HamstercardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HamstercardComponent]
    });
    fixture = TestBed.createComponent(HamstercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
