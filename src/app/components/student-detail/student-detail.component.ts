import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  studentName:any;
  studentId:any;
  studentClass:any;
  mathsGrade:any;
  scienceGrade:any;
  socialGrade:any;
  studenttotalMarks:any;
  id:any;
  selectedStudent:any[]=[];
  students: any= {
    1:{id:1, name: "Alfreds Futterkiste", class: "12th", maths: "98",science: "98",social: "98", totalMarks: "90", },
    2:{id:2, name: "Ernst Handel", class: "11th", maths: "98",science: "95", social: "95", totalMarks: "100"},
    3:{id:3, name: "Emanual", class: "8th", maths: "98",science: "95", social: "97", totalMarks: "99"},
    4:{id:4, name: "Bacchus Winecellars", class: "10th",maths: "98",science: "97",social: "95", totalMarks: "90"},
    5:{id:5, name: "Alimentari Riuniti", class: "12th", maths: "98",science: "99",social: "90", totalMarks: "95"}
  }
  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
      let currentId:any = this.id;
      let allStudent:any = this.students;
      if(currentId in allStudent){
        if(currentId==allStudent[currentId]["id"]){
          this.studentName = allStudent[currentId]["name"];
          this.studentId = allStudent[currentId]["id"];
          this.studentClass = allStudent[currentId]["class"];
          this.mathsGrade = allStudent[currentId]["maths"];
          this.scienceGrade = allStudent[currentId]["maths"];
          this.socialGrade = allStudent[currentId]["maths"];
          this.studenttotalMarks = Number(this.mathsGrade) + Number(this.scienceGrade) + Number(this.socialGrade);
        }else{
            alert("invalid");
        }
      }
      
  });
  }
}
