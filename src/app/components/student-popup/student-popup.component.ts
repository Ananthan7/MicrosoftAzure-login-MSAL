import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-popup',
  templateUrl: './student-popup.component.html',
  styleUrls: ['./student-popup.component.css']
})
export class StudentPopupComponent implements OnInit {
  @Input() studentId:any;
  students: any= {
    1:{id:1, name: "Alfreds Futterkiste", class: "12th", grade: "A+", totalMarks: "90"},
    2:{id:2, name: "Ernst Handel", class: "11th", grade: "A+", totalMarks: "100"},
    3:{id:3, name: "Emanual", class: "8th", grade: "B+", totalMarks: "99"},
    4:{id:4, name: "Bacchus Winecellars", class: "10th", grade: "A+", totalMarks: "90"},
    5:{id:5, name: "Alimentari Riuniti", class: "12th", grade: "B+", totalMarks: "95"}
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
