import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpAComponent } from './cp-a.component';

describe('CpAComponent', () => {
  let component: CpAComponent;
  let fixture: ComponentFixture<CpAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpAComponent]
    });
    fixture = TestBed.createComponent(CpAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
