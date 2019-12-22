import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { Observable } from 'rxjs';
import { ListItem } from '../models/list-item';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  shoppingList$: Observable<ListItem[]>;

  constructor(
    private listService: ListService
  ) { }

  ngOnInit() {
    this.shoppingList$ = this.listService.shoppingList$;
  }

  onItemUpdate(item: ListItem, list: ListItem[]) {
    this.listService.updateListItem(item, list);
  }
}
