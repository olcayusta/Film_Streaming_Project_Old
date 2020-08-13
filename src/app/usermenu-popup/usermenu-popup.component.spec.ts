import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermenuPopupComponent } from './usermenu-popup.component';

describe('UsermenuPopupComponent', () => {
  let component: UsermenuPopupComponent;
  let fixture: ComponentFixture<UsermenuPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermenuPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermenuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
