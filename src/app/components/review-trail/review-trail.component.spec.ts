import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTrailComponent } from './review-trail.component';

describe('ReviewTrailComponent', () => {
  let component: ReviewTrailComponent;
  let fixture: ComponentFixture<ReviewTrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewTrailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
