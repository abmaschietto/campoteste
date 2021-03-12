import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyumComponent } from './udemyum.component';

describe('UdemyumComponent', () => {
  let component: UdemyumComponent;
  let fixture: ComponentFixture<UdemyumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdemyumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
