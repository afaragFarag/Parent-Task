import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './core/guards/auth.guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren:
      './modules/adminstration/adminstration.module#AdminstrationModule'
  },
  {
    path: 'admin',
    loadChildren:
      './modules/adminstration/adminstration.module#AdminstrationModule'
  },
  {
    path: 'users',
    loadChildren: './modules/users/users.module#UsersModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
