import { Component } from '@angular/core';
 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


// EmpList : string [][];
  EmpList =[

    {
    Name : "emp l ",
    salary : 2000,
    Jdate : "5/7/1993",
    Age : 25,
    title : "engineer",
    Admin :true
    },

    {
      Name : "emp2 ",
      salary : 20500,
      Jdate : "5/7/1993",
      Age : 20,
      title : "engineer",
      Admin :false
      },
     
      {
        Name : "emp5",
        salary : 4000,
        Jdate : "5/7/1993",
        Age : 23,
        title : "engineer",
        Admin :true
        },
        {
          Name : "emp5 ",
          salary : 5000,
          Jdate : "5/7/1993",
          Age : 30,
          title : "engin eer",
          Admin :false
          },
          {
            Name : "emp4 ",
            salary : 3000,
            Jdate : "5/7/1993",
            Age : 50,
            title : "engineer",
            Admin :true
            }


  ];

 
  title = 'ExcelSheetReader';
}
