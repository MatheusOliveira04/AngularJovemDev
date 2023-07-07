import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgModelComponent } from './diretiva-ng-model.component';

describe('DiretivaNgModelComponent', () => {
  let component: DiretivaNgModelComponent;
  let fixture: ComponentFixture<DiretivaNgModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivaNgModelComponent]
    });
    fixture = TestBed.createComponent(DiretivaNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
