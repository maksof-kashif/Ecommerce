import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpenalComponent } from './adminpenal.component';

describe('AdminpenalComponent', () => {
  let component: AdminpenalComponent;
  let fixture: ComponentFixture<AdminpenalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpenalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
