import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeshionComponent } from './feshion.component';

describe('FeshionComponent', () => {
  let component: FeshionComponent;
  let fixture: ComponentFixture<FeshionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeshionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeshionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
