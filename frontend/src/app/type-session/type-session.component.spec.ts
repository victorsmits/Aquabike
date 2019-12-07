import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSessionComponent } from './type-session.component';

describe('TypeSessionComponent', () => {
  let component: TypeSessionComponent;
  let fixture: ComponentFixture<TypeSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
