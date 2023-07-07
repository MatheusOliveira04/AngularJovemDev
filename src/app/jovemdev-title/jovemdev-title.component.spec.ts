import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JovemdevTitleComponent } from './jovemdev-title.component';

describe('JovemdevTitleComponent', () => {
  let component: JovemdevTitleComponent;
  let fixture: ComponentFixture<JovemdevTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JovemdevTitleComponent]
    });
    fixture = TestBed.createComponent(JovemdevTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
