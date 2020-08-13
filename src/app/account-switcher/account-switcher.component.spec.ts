import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSwitcherComponent } from './account-switcher.component';

describe('AccountSwitcherComponent', () => {
  let component: AccountSwitcherComponent;
  let fixture: ComponentFixture<AccountSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
