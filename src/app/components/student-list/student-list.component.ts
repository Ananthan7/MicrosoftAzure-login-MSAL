import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  popUpFlag:any= 0;
  students: any[]= [
    {id:1, name: "Alfreds Futterkiste", class: "12th", grade: "A+", totalMarks: "90"},
    {id:2, name: "Ernst Handel", class: "11th", grade: "A+", totalMarks: "100"},
    {id:3, name: "Emanual", class: "8th", grade: "B+", totalMarks: "99"},
    {id:4, name: "Bacchus Winecellars", class: "10th", grade: "A+", totalMarks: "90"},
    {id:5, name: "Alimentari Riuniti", class: "12th", grade: "B+", totalMarks: "95"}
  ]
  constructor() {}

  ngOnInit(): void {
  }
  popUp(studentId:any){
    this.popUpFlag=1;
  }

}
