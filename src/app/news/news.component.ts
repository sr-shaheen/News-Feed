import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewsDetailsComponent } from '../news-details/news-details.component';
import { IndexDBService } from '../services/index-db.service';
import { AsyncService } from '../shared/services/async.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  items: any;
  defaultImage = '/assets/nytimes.jpg';
  constructor(
    private iDB: IndexDBService,
    private router: Router,
    private asyncService: AsyncService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.asyncService.start();
    this.iDB
      .getData('news')
      .then((res) => {
        if (
          this.router.url.split('/')[1] === '' ||
          this.router.url.split('/')[1] === 'home'
        ) {
          this.items = res.home;
        } else if (this.router.url.split('/')[1] === 'world') {
          this.items = res.world;
        } else if (this.router.url.split('/')[1] === 'us') {
          this.items = res.us;
        } else if (this.router.url.split('/')[1] === 'science') {
          this.items = res.science;
        } else if (this.router.url.split('/')[1] === 'arts') {
          this.items = res.arts;
        } else {
          this.items = [];
        }
        this.asyncService.finish();
      })
      .catch((err) => {
        this.items = [];
        this.asyncService.finish();
      });
  }

  newsDetailsModal(news): void {
    const dialogRef = this.dialog.open(NewsDetailsComponent, {
      width: '900px',
      height: '450px',
      data: news,
      panelClass: 'icon-outside',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
