import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeatureCardComponent } from './home-feature-card.component';

describe('HomeFeatureCardComponent', () => {
  let component: HomeFeatureCardComponent;
  let fixture: ComponentFixture<HomeFeatureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFeatureCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFeatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
