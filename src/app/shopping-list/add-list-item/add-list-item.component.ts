import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-add-list-item',
  templateUrl: './add-list-item.component.html',
  styleUrls: ['./add-list-item.component.scss']
})
export class AddListItemComponent implements OnInit {

  constructor(
    private listService: ListService
  ) { }

  ngOnInit() {
  }

}
