import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcelSheetReaderComponent } from './excel-sheet-reader/excel-sheet-reader.component';
import { Ng2SearchPipeModule } from  "ng2-search-filter";
import { NgxPaginationModule} from "ngx-pagination";
import { NgxDatatableModule} from "@swimlane/ngx-datatable";
import { FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortingPipe } from './sorting.pipe';
import { MatTableModule} from '@angular/material/table';
import { OutputComponent } from './output/output.component';
import { GridComponent } from './grid/grid.component';




@NgModule({
  declarations: [
    AppComponent,
    ExcelSheetReaderComponent, 
    NavbarComponent,
     SortingPipe,
     OutputComponent,
     GridComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxDatatableModule,
    FormsModule,
    BrowserAnimationsModule
     
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
