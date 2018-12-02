import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-board',
  templateUrl: './student-board.component.html',
  styleUrls: ['./student-board.component.css']
})
export class StudentBoardComponent implements OnInit {
	currentDay = new Date().getDate();
	currentMonth= new Date().getMonth()+1;
	currentYear =new Date().getFullYear();
	currentDate = this.currentDay/this.currentMonth/this.currentYear;
	schedule = [
				{
			        "id":"1",
			        "name":"demo1",
			        "time":"60 min",
			        "Que":"100",
			        "startDate":"23/11/2018",
			        "endDate":"23/05/2019"
				},
				{
			        "id":"2",
			        "name":"demo2",
			        "time":"60 min",
			        "Que":"100",
			        "startDate":"25/11/2018",
			        "endDate":"25/05/2019"
				},
				{
			        "id":"3",
			        "name":"demo3",
			        "time":"60 min",
			        "Que":"100",
			        "startDate":"26/11/2018",
			        "endDate":"26/05/2019"
				},
				{
			        "id":"4",
			        "name":"demo4",
			        "time":"60 min",
			        "Que":"100",
			        "startDate":"26/10/2018",
			        "endDate":"26/04/2019"
				},
				{
			        "id":"5",
			        "name":"demo 5",
			        "time":"60 min",
			        "Que":"100",
			        "startDate":"22/o4/2018",
			        "endDate":"22/11/2019"
				}
			];
	complete = [
				{
			        "id":"1",
			        "name":"demo1",
			        "time":"60 min",
			        "Que":"100",
			        "startDate":"23/11/2018",
			        "endDate":"23/05/2019"
				},
				{
			        "id":"2",
			        "name":"demo2",
			        "time":"60 min",
			        "Que":"100",
			        "startDate":"25/11/2018",
			        "endDate":"25/05/2019"
				},
				{
			        "id":"3",
			        "name":"demo3",
			        "time":"60 min",
			        "Que":"100",
			        "startDate":"26/11/2018",
			        "endDate":"26/05/2019"
				},
				{
			        "id":"4",
			        "name":"demo4",
			        "time":"60 min",
			        "Que":"100",
			        "startDate":"26/10/2018",
			        "endDate":"26/04/2019"
				},
				{
			        "id":"5",
			        "name":"demo 5",
			        "time":"60 min",
			        "Que":"100",
			        "startDate":"22/o4/2018",
			        "endDate":"22/11/2019"
				}
			]

  ngOnInit() {
  	this.genrateSchedule();
  }
  genrateSchedule(){
  	this.schedule;
  	this.complete;
  	this.currentDate;
  }
}
