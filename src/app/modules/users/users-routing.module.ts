import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersComponent } from './users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-users',
        component: ListUsersComponent
      },
      {
        path: 'add',
        component: AddUserComponent
      },
      {
        path: 'update/:id',
        component: UpdateUserComponent
      },
      {
        path: 'details/:id',
        component: UserDetailsComponent
      },
      { path: '', redirectTo: 'list-users', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}

export const routedComponents = [UsersComponent];
