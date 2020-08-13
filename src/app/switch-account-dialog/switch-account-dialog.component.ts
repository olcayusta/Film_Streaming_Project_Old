import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-account-dialog',
  templateUrl: './switch-account-dialog.component.html',
  styleUrls: ['./switch-account-dialog.component.scss']
})
export class SwitchAccountDialogComponent implements OnInit {
  accounts = [
    {
      image: 'https://lh3.googleusercontent.com/jFwYRjqC6yBJJH280DzFO91KvhIuQ_KqkyH9gn7d8J7CCHoAMlqJgIZ9fA7P7t1-4PgxxpOloM0c3iea=w544-h544-p-l90-rj',
      title: 'Ed Sheeran'
    },
    {
      image: 'https://lh3.googleusercontent.com/_jmfSvzxYiItQO0cv9Z8q1IKJgdlOsb6KTfXCOf793a0xbjNAXyyDTDUS13NzGOk0etp3BjRa9yiQQ=w544-h544-p-l90-rj',
      title: 'Adele'
    },
    {
      image: 'https://lh3.googleusercontent.com/_1eHFJP5T36L-etq38Jm4DdBPs4M4h66VVVv_TVTZFkjtWC4EhAEv0b82XocDO4jaO6THnrKVXgVE_A=w544-h544-p-l90-rj',
      title: 'Taylor Swift'
    },
    {
      image: 'https://lh3.googleusercontent.com/GAR8Y4xuTIBIrOr0GPSPdhPc-aRvUCOXwiC0O75cKSP7uRoHFvb20K2ZwpaZwxp2IcSoXGBiAgjit-BC=w544-h544-p-l90-rj',
      title: 'Dua Lipa'
    }
  ];
  selectedIndex = 2;

  constructor() { }

  ngOnInit() {
  }

}
