import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationsTable } from './prestations-table';

describe('PrestationsTable', () => {
  let component: PrestationsTable;
  let fixture: ComponentFixture<PrestationsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestationsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestationsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
