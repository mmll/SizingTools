import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizingFormComponent } from './sizing-form.component';

describe('SizingFormComponent', () => {
  let component: SizingFormComponent;
  let fixture: ComponentFixture<SizingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
