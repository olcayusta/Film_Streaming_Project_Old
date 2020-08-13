import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatshotComponent } from './whatshot.component';

describe('WhatshotComponent', () => {
  let component: WhatshotComponent;
  let fixture: ComponentFixture<WhatshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
