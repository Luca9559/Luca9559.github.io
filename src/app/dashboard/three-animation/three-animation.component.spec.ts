import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeAnimationComponent } from './three-animation.component';

describe('ThreeAnimationComponent', () => {
  let component: ThreeAnimationComponent;
  let fixture: ComponentFixture<ThreeAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
