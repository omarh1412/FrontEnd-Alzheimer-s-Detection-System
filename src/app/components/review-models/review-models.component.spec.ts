import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewModelsComponent } from './review-models.component';

describe('ReviewModelsComponent', () => {
  let component: ReviewModelsComponent;
  let fixture: ComponentFixture<ReviewModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewModelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
