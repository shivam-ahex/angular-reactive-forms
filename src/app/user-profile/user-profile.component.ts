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
  this.userProfileData.push(this.userProfileForm.value);
}
/**Method to remove the row from user table */
removeRow(user){
  const index = this.userProfileData.indexOf(user);
  this.userProfileData.splice(index,1);
}
  ngOnInit() {
  }

}
