import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'login',
    pathMatch: 'full',
    redirectTo: 'user-login'
  },
  {
    path: 'user-login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'registration',
    pathMatch: 'full',
    component: RegistrationComponent
  },
  {
    path: 'user-list',
    pathMatch: 'full',
    component: UserListComponent
  },
  {
    path: 'user-details/:userId',
    pathMatch: 'full',
    component: UserDetailsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    // { useHash: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
