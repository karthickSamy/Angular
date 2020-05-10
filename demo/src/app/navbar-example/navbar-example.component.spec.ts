import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarExampleComponent } from './navbar-example.component';

describe('NavbarExampleComponent', () => {
  let component: NavbarExampleComponent;
  let fixture: ComponentFixture<NavbarExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
