import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySebling2Component } from './my-sebling2.component';

describe('MySebling2Component', () => {
  let component: MySebling2Component;
  let fixture: ComponentFixture<MySebling2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySebling2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySebling2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
