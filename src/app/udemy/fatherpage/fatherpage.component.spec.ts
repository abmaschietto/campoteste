import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherpageComponent } from './fatherpage.component';

describe('FatherpageComponent', () => {
  let component: FatherpageComponent;
  let fixture: ComponentFixture<FatherpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatherpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
