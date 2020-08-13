import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPhotoDialogComponent } from './select-photo-dialog.component';

describe('SelectPhotoDialogComponent', () => {
  let component: SelectPhotoDialogComponent;
  let fixture: ComponentFixture<SelectPhotoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPhotoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPhotoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
