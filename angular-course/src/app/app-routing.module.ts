import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { authGuard } from './user/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'kanban', loadChildren: () => import('./kanban/kanban.module').then(m => m.KanbanModule), canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
