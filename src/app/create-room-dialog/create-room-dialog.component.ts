import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-room-dialog',
  templateUrl: './create-room-dialog.component.html',
  styleUrls: ['./create-room-dialog.component.scss']
})
export class CreateRoomDialogComponent implements OnInit {
  selected = 'option2';

  constructor() { }

  ngOnInit() {
  }

}
