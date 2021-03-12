import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemydoisComponent } from './udemydois.component';

describe('UdemydoisComponent', () => {
  let component: UdemydoisComponent;
  let fixture: ComponentFixture<UdemydoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdemydoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemydoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
