import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
	title="user-details";
	profileForm = new FormGroup({
    	name: new FormControl(''),
    	desitination: new FormControl(''),
    	institutename: new FormControl(''),
    	contactnumber: new FormControl(''),
    	emailId: new FormControl(''),
    	webAddress: new FormControl(''),
    	state: new FormControl(''),
    	pinCode: new FormControl(''),
    	address: new FormControl(''),
 	});
 	onSubmit() {
  		console.warn(this.profileForm.value);
	}
}
