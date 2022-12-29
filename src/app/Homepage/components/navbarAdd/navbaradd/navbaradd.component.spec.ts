import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaraddComponent } from './navbaradd.component';

describe('NavbaraddComponent', () => {
  let component: NavbaraddComponent;
  let fixture: ComponentFixture<NavbaraddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbaraddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbaraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
