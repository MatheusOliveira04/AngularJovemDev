import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploBindingComponent } from './exemplo-binding.component';

describe('ExemploBindingComponent', () => {
  let component: ExemploBindingComponent;
  let fixture: ComponentFixture<ExemploBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExemploBindingComponent]
    });
    fixture = TestBed.createComponent(ExemploBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
