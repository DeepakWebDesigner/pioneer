import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.css']
})
export class CreatePackageComponent implements OnInit {

 	constructor(private router: Router) {
 	};
 	createPackage: string[] = [];
 	packageName:string = '';
 	startDate:string = '';
 	endDate:string ='';
 	totalTime:string ='';
 	totalQuestion:string ='';
 	i:number = 0 ;
	public addPackage(){
		this.createPackage.push({
		'id':this.i++,
		'name':this.packageName,
		'time':this.totalTime,
		'Que':this.totalQuestion,
		'startDate':this.startDate,
		'endDate':this.endDate
		});
		console.log(this.createPackage)
	}
	generatePackage(){
		this.router.navigate(['dashboard/generate-package']);
	}

	ngOnInit() {
		
	}

}
