import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListItem } from '../models/list-item';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private shoppingListSub$ = new BehaviorSubject<ListItem[]>([]);
  public readonly shoppingList$ = this.shoppingListSub$.asObservable();

  constructor() {

    const initialList = [
      new ListItem(0, 'milk', true),
      new ListItem(1, 'eggs', false)
    ];

    this.shoppingListSub$.next(initialList);

  }

  addNewListItem(item: ListItem, list: ListItem[]): void {
    const shoppingList = [...list];
    shoppingList.push(item);
    this.shoppingListSub$.next(shoppingList);
  }

  updateListItem(item: ListItem, list: ListItem[]): void {
    const shoppingList = [...list];
    const indexOfItemInList = shoppingList.findIndex((listItem) => listItem.id === item.id);
    shoppingList.splice(indexOfItemInList, 1, item);
    this.shoppingListSub$.next(shoppingList);
  }

}
