import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit {

  defaultImage = '/assets/nytimes.jpg';
  constructor(
    public dialogRef: MatDialogRef<NewsDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data, 'daaaaaaaaaaaaataaaaaaaaaa');
  }

  close = (): void => {
    this.dialogRef.close();
  };
}
