import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpPaiComponent } from './cp-pai.component';

describe('CpPaiComponent', () => {
  let component: CpPaiComponent;
  let fixture: ComponentFixture<CpPaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpPaiComponent]
    });
    fixture = TestBed.createComponent(CpPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
