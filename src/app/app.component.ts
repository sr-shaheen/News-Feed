import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { DeveloperHttpService } from './services/developer-http.service';
import { IndexDBService } from './services/index-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'newsFeed';
  serviceSub: Subscription;
  items: any;

  constructor(
    private service: DeveloperHttpService,
    private iDB: IndexDBService
  ) {}
  ngOnInit(): void {
    let art = this.service.artsNews();
    let home = this.service.homeNews();
    let us = this.service.usNews();
    let science = this.service.scienceNews();
    let wrold = this.service.worldNews();

    this.serviceSub = forkJoin([home, wrold, us, science, art]).subscribe(
      (results) => {
        let dataFormet = {
          home: results[0],
          world: results[1],
          us: results[2],
          science: results[3],
          arts: results[4],
        };
        console.log(dataFormet, 'ppppppp');

        this.iDB
          .addData(dataFormet, 'news')
          .then((res) => {
            console.log(res, 'saved');
          })
          .catch((err) => console.log(err, 'error'));
          this.items=results[0]
      }
    );
  }

  ngOnDestroy(): void {
    if (this.serviceSub) {
      this.serviceSub.unsubscribe();
    }
  }
}
