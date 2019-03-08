import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCaptacaoComponent } from './form-captacao.component';

describe('FormCaptacaoComponent', () => {
  let component: FormCaptacaoComponent;
  let fixture: ComponentFixture<FormCaptacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCaptacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCaptacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
