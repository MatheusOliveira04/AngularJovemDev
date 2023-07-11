import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpAgrupadorComponent } from './cp-agrupador.component';

describe('CpAgrupadorComponent', () => {
  let component: CpAgrupadorComponent;
  let fixture: ComponentFixture<CpAgrupadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpAgrupadorComponent]
    });
    fixture = TestBed.createComponent(CpAgrupadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
