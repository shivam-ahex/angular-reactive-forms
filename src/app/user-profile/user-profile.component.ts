import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

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

  constructor(private fb: FormBuilder) { }

formSubmit(){
  console.warn(this.userProfileForm.value);
}
  ngOnInit() {
  }

}
