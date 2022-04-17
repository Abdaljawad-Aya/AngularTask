import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookmarkComponent } from "./bookmark/bookmark.component";

const routes: Routes = [
  // I used routing to navigate through pages
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'bookmark',
    component: BookmarkComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
