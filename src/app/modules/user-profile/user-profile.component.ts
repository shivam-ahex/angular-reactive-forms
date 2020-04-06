/** Importing angular component and form elements */
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
/**Loading meta data */
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
/** Class defining the user data to load into the component */
export class UserProfileComponent implements OnInit {
userProfileData:Array<any>=[];

constructor(private fb: FormBuilder) { } /**Adding formbuilder class */
  
ngOnInit() {
  }
  
  isSubmit: boolean = false;
  countries:Array<object>=[
    { id: 1, name: "India" },
    { id: 2, name: "USA" },
    { id: 3, name: "Japan" },

  ];
  /** User data through formbuilder class */
userProfileForm = this.fb.group({
  name:['',Validators.required],
  mobileNumber:['', [Validators.required, Validators.pattern('(?=.*[0-9]).{10}')]],
  email:['', [Validators.email, Validators.required]],
  country:['',Validators.required],
  description:['',Validators.required],
  gender: ['', [Validators.required]],
  isMarried: ['', [Validators.required]],
    
});
get name() {
  return this.userProfileForm.get('name');
}
get email() {
  return this.userProfileForm.get('email');
}

get mobileNumber() {
  return this.userProfileForm.get('mobileNumber');
}

get country() {
  return this.userProfileForm.get('country');
}

get description() {
  return this.userProfileForm.get('description');
}

get gender() {
  return this.userProfileForm.get('gender');
}

get isMarried() {
  return this.userProfileForm.get('isMarried');
}
  /** Method for submitting form data */
public formSubmit():void{
  if (this.userProfileForm.invalid) {
    this.isSubmit = true;
  }
  else {
    this.isSubmit = false;
  }
 
  this.userProfileData.push(this.userProfileForm.value);
  console.log(this.userProfileData);
}
}
