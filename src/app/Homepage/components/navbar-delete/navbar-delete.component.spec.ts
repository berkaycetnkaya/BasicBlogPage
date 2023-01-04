import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDeleteComponent } from './navbar-delete.component';

describe('NavbarDeleteComponent', () => {
  let component: NavbarDeleteComponent;
  let fixture: ComponentFixture<NavbarDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
