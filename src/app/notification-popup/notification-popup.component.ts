import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationPopupComponent implements OnInit {
  notifications = [
    {
      img: 'http://localhost:4000/static/sam-simon.jpg',
      author: 'Olcay Usta'
    },
    {
      img: 'http://localhost:4000/static/pink-panther.jpg',
      author: 'Jason Statham'
    },
    {
      img: 'http://localhost:4000/static/pikachu.jpg',
      author: 'Ash'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
