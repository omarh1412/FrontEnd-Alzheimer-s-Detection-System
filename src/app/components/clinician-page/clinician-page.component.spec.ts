import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicianPageComponent } from './clinician-page.component';

describe('ClinicianPageComponent', () => {
  let component: ClinicianPageComponent;
  let fixture: ComponentFixture<ClinicianPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicianPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClinicianPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
