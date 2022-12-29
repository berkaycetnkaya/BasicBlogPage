import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagesetsComponent } from './homepagesets.component';

describe('HomepagesetsComponent', () => {
  let component: HomepagesetsComponent;
  let fixture: ComponentFixture<HomepagesetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepagesetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepagesetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
