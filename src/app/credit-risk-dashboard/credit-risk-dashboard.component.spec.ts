import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditRiskDashboardComponent } from './credit-risk-dashboard.component';

describe('CreditRiskDashboardComponent', () => {
  let component: CreditRiskDashboardComponent;
  let fixture: ComponentFixture<CreditRiskDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditRiskDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditRiskDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
