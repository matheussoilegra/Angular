import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoBindingComponent } from './two-binding.component';

describe('TwoBindingComponent', () => {
  let component: TwoBindingComponent;
  let fixture: ComponentFixture<TwoBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
