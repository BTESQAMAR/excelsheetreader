import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() data : any[];

  column : string[];

  sortedcolumn : string;

  p : number; 

  searchText :any;

  
  para =" IN THIS TABLE CAN BE PERFORMED LIKE SORTING , SEARCHING , PAGINATING ETC.";

 

  constructor() { }

  ngOnInit(): void {
 this.column = Object.keys(this.data[0]);
  }


  


}
