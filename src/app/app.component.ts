import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { DeveloperHttpService } from './services/developer-http.service';
import { IndexDBService } from './services/index-db.service';
import { AsyncService } from './shared/services/async.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'newsFeed';
  serviceSub: Subscription;

  constructor(
    private service: DeveloperHttpService,
    private iDB: IndexDBService,
    private asyncService: AsyncService
  ) {}
  ngOnInit(): void {
    let art = this.service.artsNews();
    let home = this.service.homeNews();
    let us = this.service.usNews();
    let science = this.service.scienceNews();
    let wrold = this.service.worldNews();
    this.asyncService.start();
    this.serviceSub = forkJoin([home, wrold, us, science, art]).subscribe(
      (results) => {
        let dataFormet = {
          home: results[0],
          world: results[1],
          us: results[2],
          science: results[3],
          arts: results[4],
        };

        this.iDB
          .addData(dataFormet, 'news')
          .then((res) => {
            this.asyncService.finish();
            console.log(res, 'saved');
          })
          .catch((err) => {
            this.asyncService.finish();
            console.log(err, 'error');
          });
      },
      (error) => {
        this.asyncService.finish();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.serviceSub) {
      this.serviceSub.unsubscribe();
    }
  }
}
