import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo : '/accueil',
    pathMatch : 'full'
  },
  {
    path : 'accueil',
    component : AccueilComponent,
    data : {title : 'Accueil'}
  },
  {
    path : 'dashbord',
    component : DashbordComponent,
    data : {title : 'Dashbord'},
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
