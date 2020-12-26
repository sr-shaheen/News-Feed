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
import { NewsDetailsComponent } from './news-details/news-details.component';

import { AsyncService } from './shared/services/async.service';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { AsyncState } from './shared/state/async.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

@NgModule({
  declarations: [AppComponent, NewsComponent, NewsDetailsComponent],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([AsyncState], {
      developmentMode: !environment.production,
    }),
    NgxsStoragePluginModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [IndexDBService, DeveloperHttpService, AsyncService],
  bootstrap: [AppComponent],
  entryComponents: [NewsDetailsComponent],
})
export class AppModule {}
