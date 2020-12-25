import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IndexDBService } from '../services/index-db.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  items: any;
  defaultImage = '/assets/nytimes.jpg';
  constructor(private iDB: IndexDBService, private router: Router) {
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
}
