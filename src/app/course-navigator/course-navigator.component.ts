import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from "../services/CourseNavigatorServiceClient"

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  courses = [];
  constructor(private service:
                CourseNavigatorServiceClient) { }


  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => {
        this.courses = courses;
      });

  }

}
