import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpBComponent } from './cp-b.component';

describe('CpBComponent', () => {
  let component: CpBComponent;
  let fixture: ComponentFixture<CpBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpBComponent]
    });
    fixture = TestBed.createComponent(CpBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
