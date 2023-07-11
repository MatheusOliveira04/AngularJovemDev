import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpFilhoComponent } from './cp-filho.component';

describe('CpFilhoComponent', () => {
  let component: CpFilhoComponent;
  let fixture: ComponentFixture<CpFilhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpFilhoComponent]
    });
    fixture = TestBed.createComponent(CpFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
