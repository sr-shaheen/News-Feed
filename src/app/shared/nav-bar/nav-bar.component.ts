import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncService } from '../services/async.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  isLoading$: Observable<boolean>;

  constructor(private asyncService: AsyncService) {}

  ngOnInit(): void {
    this.isLoading$ = this.asyncService.isLoading;
  }
}
