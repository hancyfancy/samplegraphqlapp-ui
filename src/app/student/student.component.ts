import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { StudentService } from 'src/services/student/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    console.log(this.getBookAndCollegeDetails("Kiran", "S1001"));
  }

  async getBookAndCollegeDetails(studentFirstName: string, studentId: string): Promise<void | BookAndCollegeDetails> {
    return await lastValueFrom(this.studentService.bookAndCollegeDetails({ studentFirstName, studentId }))
      .then((details) => {
        return details;
      })
      .catch((error) => {
        console.log("Promise rejected with " + JSON.stringify(error));
      });
  }
}
