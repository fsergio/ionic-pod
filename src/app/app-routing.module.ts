import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'contactAdd', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'contactAdd', loadChildren: './pages/contact-add/contact-add.module#ContactAddPageModule' },
  { path: 'contact-list', loadChildren: './pages/contact-list/contact-list.module#ContactListPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
