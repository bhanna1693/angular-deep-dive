import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestLandingPageComponent } from './invest-landing-page.component';

describe('InvestLandingPageComponent', () => {
  let component: InvestLandingPageComponent;
  let fixture: ComponentFixture<InvestLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
