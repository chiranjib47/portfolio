import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularAnimationComponent } from './circular-animation.component';

describe('CircularAnimationComponent', () => {
  let component: CircularAnimationComponent;
  let fixture: ComponentFixture<CircularAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircularAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircularAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
