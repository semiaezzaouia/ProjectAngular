import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltredDashboardComponent } from './filtred-dashboard.component';

describe('FiltredDashboardComponent', () => {
  let component: FiltredDashboardComponent;
  let fixture: ComponentFixture<FiltredDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltredDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltredDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
