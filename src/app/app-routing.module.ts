import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  // { path: 'users/:id', children: import('./users/users.module').then(x => x.UsersModule) }
  { path: 'users', component: UsersComponent },
  { path: 'people', redirectTo: '/users'},
  { path: '**', component: PageNotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
