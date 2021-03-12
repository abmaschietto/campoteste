import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestebindingComponent } from './testebinding.component';

describe('TestebindingComponent', () => {
  let component: TestebindingComponent;
  let fixture: ComponentFixture<TestebindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestebindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestebindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
