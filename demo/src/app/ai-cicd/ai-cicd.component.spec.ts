import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiCicdComponent } from './ai-cicd.component';

describe('AiCicdComponent', () => {
  let component: AiCicdComponent;
  let fixture: ComponentFixture<AiCicdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiCicdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiCicdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
