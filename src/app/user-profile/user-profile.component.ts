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
/** User data through formbuilder class */
userProfileForm = this.fb.group({
            firstName:['',Validators.required],
            lastName:[''],
            address:this.fb.group({
              street:[''],
              city:[''],
              state:[''],
              pinCode:['']
            })
});

  constructor(private fb: FormBuilder) { }  /**Adding formbuilder class */
/** Method for submitting form data */
formSubmit(){
  console.warn(this.userProfileForm.value);
  this.userProfileData.push(this.userProfileForm.value);
  console.log(this.userProfileData[0]);
}
  ngOnInit() {
  }

}
