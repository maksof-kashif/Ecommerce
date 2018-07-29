import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorationpieceShowpieceComponent } from './decorationpiece-showpiece.component';

describe('DecorationpieceShowpieceComponent', () => {
  let component: DecorationpieceShowpieceComponent;
  let fixture: ComponentFixture<DecorationpieceShowpieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecorationpieceShowpieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorationpieceShowpieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
