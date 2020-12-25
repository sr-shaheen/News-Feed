import { DeveloperHttpService } from './services/developer-http.service';
import { IndexDBService } from './services/index-db.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [AppComponent, NewsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [IndexDBService, DeveloperHttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
