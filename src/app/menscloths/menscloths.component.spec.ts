import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensclothsComponent } from './menscloths.component';

describe('MensclothsComponent', () => {
  let component: MensclothsComponent;
  let fixture: ComponentFixture<MensclothsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensclothsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensclothsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
