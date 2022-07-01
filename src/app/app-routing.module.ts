import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { HeaderComponent } from './header/header.component';
import { HealthNewsComponent } from './health-news/health-news.component';
import { PoliticsNewsComponent } from './politics-news/politics-news.component';
import { SportNewsComponent } from './sport-news/sport-news.component';
import { TechnewsComponent } from './technews/technews.component';

const routes: Routes = [
  {path:"", component:HeaderComponent},
  {path:"politics", component:PoliticsNewsComponent},
  {path:"sport", component:SportNewsComponent},
  {path:"tech", component:TechnewsComponent},
  {path:"health", component:HealthNewsComponent},
  {path:"business", component:BusinessNewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
