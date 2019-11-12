import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateSessionComponent } from './admin-create-session.component';

describe('AdminCreateSessionComponent', () => {
  let component: AdminCreateSessionComponent;
  let fixture: ComponentFixture<AdminCreateSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreateSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
