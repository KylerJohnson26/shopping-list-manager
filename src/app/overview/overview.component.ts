import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { Observable } from 'rxjs';
import { ListItem } from '../models/list-item';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  vm$: Observable<{
    numItems: number,
    numAcquired: number,
    numRemaining: number
  }>;

  constructor(
    private listService: ListService
  ) { }

  ngOnInit() {
    this.vm$ = this.listService.shoppingList$.pipe(
      map((list: ListItem[]) => this.getListOverview(list))
    )
  }

  getListOverview(list: ListItem[]) {
    const numItems = list.length;
    const numAcquired = list.filter(item => item.isAcquired).length;
    const numRemaining = numItems - numAcquired;
    return { numItems, numAcquired, numRemaining };
  }

}
