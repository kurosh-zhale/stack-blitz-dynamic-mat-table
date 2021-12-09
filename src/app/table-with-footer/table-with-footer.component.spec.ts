import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithFooterComponent } from './table-with-footer.component';

describe('TableWithFooterComponent', () => {
  let component: TableWithFooterComponent;
  let fixture: ComponentFixture<TableWithFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWithFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
