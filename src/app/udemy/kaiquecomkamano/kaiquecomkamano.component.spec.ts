import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaiquecomkamanoComponent } from './kaiquecomkamano.component';

describe('KaiquecomkamanoComponent', () => {
  let component: KaiquecomkamanoComponent;
  let fixture: ComponentFixture<KaiquecomkamanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaiquecomkamanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaiquecomkamanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
