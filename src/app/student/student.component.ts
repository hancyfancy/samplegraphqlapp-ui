import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { StudentService } from 'src/services/student/student.service';
import { BookAndCollegeDetails } from '../models/BookAndCollegeDetails';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  protected bookAndCollegeDetails: BookAndCollegeDetails | void | undefined = undefined;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getBookAndCollegeDetails("Kiran", "S1001").then((res) => {this.bookAndCollegeDetails = res});
  }

  getBookAndCollegeDetails(studentFirstName: string, studentId: string): Promise<void | BookAndCollegeDetails> {
    return lastValueFrom(this.studentService.bookAndCollegeDetails({ studentFirstName, studentId }))
      .then((details) => {
        return details;
      })
      .catch((error) => {
        console.log("Promise rejected with " + JSON.stringify(error));
      });
  }
}
