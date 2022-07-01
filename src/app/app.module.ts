import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { HeaderComponent } from './header/header.component';
import { HealthNewsComponent } from './health-news/health-news.component';
import { PoliticsNewsComponent } from './politics-news/politics-news.component';
import { SportNewsComponent } from './sport-news/sport-news.component';
import { TechnewsComponent } from './technews/technews.component';

@NgModule({
  declarations: [
    AppComponent,
    SportNewsComponent,
    TechnewsComponent,
    BusinessNewsComponent,
    HeaderComponent,
    PoliticsNewsComponent,
    HealthNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
