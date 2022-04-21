import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonHighlightModule } from '../button-highlight.module';
import { UserRoutesModule } from './user-routing.module';
import { UsersComponent } from './users.component';


@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [ButtonHighlightModule, UserRoutesModule,RouterModule]
})
export class UserModule { }
