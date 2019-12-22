import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ListItem } from 'src/app/models/list-item';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit {

  @Input() listItem: ListItem;
  @Output() itemUpdate = new EventEmitter<ListItem>();
  itemForm: FormGroup;
  isEditable = false;

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.itemForm = this.formBuilder.group({
      id: new FormControl(this.listItem.id),
      name: new FormControl(this.listItem.name, { updateOn: 'change' }),
      isAcquired: new FormControl(this.listItem.isAcquired, { updateOn: 'change' })
    })
  }

  onKeydown() {
    this.isEditable = false;
    this.itemForm.value.isAcquired = false;
    this.onChange();
  }

  onChange() {
    this.itemUpdate.emit(this.itemForm.value);
  }

}
