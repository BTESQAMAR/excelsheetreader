import { Component, OnInit ,Input } from '@angular/core';
import * as  XLSX from 'xlsx';

@Component({
  selector: 'app-excel-sheet-reader',
  templateUrl: './excel-sheet-reader.component.html',
  styleUrls: ['./excel-sheet-reader.component.css']
})
export class ExcelSheetReaderComponent implements OnInit {
  
  file = "EXCELSHEET READER APPLICATION";
  

  searchText : string;
  p : number;
  data : [][];

  //  columns :string[];
//  CustList : any [][];

//  value :[];
 



  constructor() { }

  ngOnInit(): void {
    // this.columns= Object.keys(this.data[0]);
    

    

}
onFileChange(evt: any)
{
  const target : DataTransfer = <DataTransfer> (evt.target);
  if (target.files.length >= 1000) throw new Error('Cannot use multiple files');
  const reader : FileReader = new  FileReader()
  reader.onload =( e:any) => {
    const bstr : string = e.target.result;
    const wb : XLSX.WorkBook =  XLSX.read (bstr,{type: 'binary'});
    const wsname : string = wb.SheetNames[0];
    const ws : XLSX.WorkSheet = wb.Sheets[wsname];
    console.log("working");
    console.log(ws);

    this.data = (XLSX.utils.sheet_to_json(ws, { header :1 }));
      // this.CustList = this.data;
    console.log(this.data);
};
  reader.readAsBinaryString(target.files[0]);
}

}
