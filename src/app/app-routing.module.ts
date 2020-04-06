import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component:UserProfileComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }