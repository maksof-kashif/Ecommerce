import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensclothsComponent } from './womenscloths.component';

describe('WomensclothsComponent', () => {
  let component: WomensclothsComponent;
  let fixture: ComponentFixture<WomensclothsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomensclothsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensclothsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
