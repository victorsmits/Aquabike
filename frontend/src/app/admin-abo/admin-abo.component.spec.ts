import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAboComponent } from './admin-abo.component';

describe('AdminAboComponent', () => {
  let component: AdminAboComponent;
  let fixture: ComponentFixture<AdminAboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
