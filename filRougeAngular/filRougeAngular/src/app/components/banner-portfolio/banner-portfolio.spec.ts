import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPortfolio } from './banner-portfolio';

describe('BannerPortfolio', () => {
  let component: BannerPortfolio;
  let fixture: ComponentFixture<BannerPortfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerPortfolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPortfolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
