import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    //canLoad: [AuthGuard]
  },
  {
    path: 'view-workouts',
    loadChildren: () => import('./view-workouts/view-workouts.module').then( m => m.ViewWorkoutsPageModule),
    //canLoad: [AuthGuard]
  },
  {
    path: 'record-workout',
    loadChildren: () => import('./record-workout/record-workout.module').then( m => m.RecordWorkoutPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'create-workout',
    loadChildren: () => import('./create-workout/create-workout.module').then( m => m.CreateWorkoutPageModule),
    //canLoad: [AuthGuard]
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
