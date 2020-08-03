import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelSheetReaderComponent } from './excel-sheet-reader.component';

describe('ExcelSheetReaderComponent', () => {
  let component: ExcelSheetReaderComponent;
  let fixture: ComponentFixture<ExcelSheetReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelSheetReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelSheetReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
