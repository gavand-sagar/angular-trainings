import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

let UserRoutes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'temp', component: UsersComponent },
]

@NgModule({
  imports: [RouterModule.forChild(UserRoutes)]
})
export class UserRoutesModule { }
