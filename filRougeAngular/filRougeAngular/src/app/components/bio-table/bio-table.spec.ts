import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioTable } from './bio-table';

describe('BioTable', () => {
  let component: BioTable;
  let fixture: ComponentFixture<BioTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
