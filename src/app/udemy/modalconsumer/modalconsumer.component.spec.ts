import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalconsumerComponent } from './modalconsumer.component';

describe('ModalconsumerComponent', () => {
  let component: ModalconsumerComponent;
  let fixture: ComponentFixture<ModalconsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalconsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalconsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
