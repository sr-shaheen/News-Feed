import { NewsComponent } from './news/news.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'home', component: NewsComponent },
  { path: 'world', component: NewsComponent },
  { path: 'us', component: NewsComponent },
  { path: 'science', component: NewsComponent },
  { path: 'arts', component: NewsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
