import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchAccountDialogComponent } from './switch-account-dialog.component';

describe('SwitchAccountDialogComponent', () => {
  let component: SwitchAccountDialogComponent;
  let fixture: ComponentFixture<SwitchAccountDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchAccountDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchAccountDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
