import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsclothsComponent } from './kidscloths.component';

describe('KidsclothsComponent', () => {
  let component: KidsclothsComponent;
  let fixture: ComponentFixture<KidsclothsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsclothsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsclothsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
