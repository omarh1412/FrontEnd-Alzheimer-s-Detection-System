import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfomTrailComponent } from './perfom-trail.component';

describe('PerfomTrailComponent', () => {
  let component: PerfomTrailComponent;
  let fixture: ComponentFixture<PerfomTrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfomTrailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfomTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
