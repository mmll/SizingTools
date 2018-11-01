import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveResultDialogComponent } from './save-result-dialog.component';

describe('SaveResultDialogComponent', () => {
  let component: SaveResultDialogComponent;
  let fixture: ComponentFixture<SaveResultDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveResultDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
