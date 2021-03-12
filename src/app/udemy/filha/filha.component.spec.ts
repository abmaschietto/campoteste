import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhaComponent } from './filha.component';

describe('FilhaComponent', () => {
  let component: FilhaComponent;
  let fixture: ComponentFixture<FilhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
