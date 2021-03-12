import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdoisComponent } from './formdois.component';

describe('FormdoisComponent', () => {
  let component: FormdoisComponent;
  let fixture: ComponentFixture<FormdoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormdoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormdoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
