import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewsDetailsComponent } from '../news-details/news-details.component';
import { IndexDBService } from '../services/index-db.service';

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
    public dialog: MatDialog
  ) {
    console.log(this.router.url);
  }

  ngOnInit(): void {
    this.iDB
      .getData('news')
      .then((res) => {
        console.log(res);
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
      })
      .catch((err) => {
        this.items = [];
      });
  }

  newsDetailsModal(news): void {
    const dialogRef = this.dialog.open(NewsDetailsComponent, {
      width: '900px',
      height: '500px',
      data: news,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
