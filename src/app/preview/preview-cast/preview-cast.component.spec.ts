import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCastComponent } from './preview-cast.component';

describe('PreviewCastComponent', () => {
  let component: PreviewCastComponent;
  let fixture: ComponentFixture<PreviewCastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewCastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
