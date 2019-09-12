import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInvestingComponent } from './about-investing.component';

describe('AboutInvestingComponent', () => {
  let component: AboutInvestingComponent;
  let fixture: ComponentFixture<AboutInvestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutInvestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutInvestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
