import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySeblingComponent } from './my-sebling.component';

describe('MySeblingComponent', () => {
  let component: MySeblingComponent;
  let fixture: ComponentFixture<MySeblingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySeblingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySeblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
