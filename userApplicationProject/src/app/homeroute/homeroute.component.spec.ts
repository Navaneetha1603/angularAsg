import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomerouteComponent } from './homeroute.component';

describe('HomerouteComponent', () => {
  let component: HomerouteComponent;
  let fixture: ComponentFixture<HomerouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomerouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomerouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
