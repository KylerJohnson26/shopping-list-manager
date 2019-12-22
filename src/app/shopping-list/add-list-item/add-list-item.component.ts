import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-list-item',
  templateUrl: './add-list-item.component.html',
  styleUrls: ['./add-list-item.component.scss']
})
export class AddListItemComponent implements OnInit {

  addNewItemForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private listService: ListService
  ) { }

  ngOnInit() {
    this.addNewItemForm = this.formBuilder.group({
      name: new FormControl(name)
    })
  }

  addNewListItem() {
    console.log(this.addNewItemForm.value.name)
  }

}
