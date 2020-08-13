import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss']
})
export class HorizontalListComponent implements OnInit {
  images = [
    'https://yt3.ggpht.com/k5gdoFVxP1hbnyQ20uhFZqeWyTF2VZSjuyF4GHsYl6-6iZqWheun58EF5Hb4FETO-znflnQfCovU=w210-h116-nd-ns-p-rp',
    'https://yt3.ggpht.com/91eVOJ7O0HRbkGNR_pDM1L6DAwhj73uhqeWqpIrWBxnsgV32wakx59-Mx9KgtyFsEEJNP-C762U=w210-h116-nd-ns-p-rp',
    'https://yt3.ggpht.com/ymuZSDXL0fU7_o9PDG-mWc6ZXHT5LSSYNa1JC--RpCFi8tmD1zOHUqtdLAohzEcj7hA7LDzcoQ7Q=w210-h116-nd-ns-p-rp',
    'https://yt3.ggpht.com/nhb_i-OanTflBk39K2OcnADufdkYK6PbjPUYXSuOnuWL8JlLgnqyLdjGfXhIkyLKgGry2fwfSwcs=w210-h116-nd-ns-p-rp',
    'https://yt3.ggpht.com/ysMqY9YqcwgR_YnALYvtBI02k6jlDPHkJt-YMJKzTq_VXgSMl5q7v8bJW_axyQHiQUng3Pw-Ys_h=w210-h116-nd-ns-p-rp',
    'https://yt3.ggpht.com/nZY6MtJ-vInFxZlk9o4m7Lxny8OeEJ_HzU01xstcrKHB2t_RMbpc4wRCS24tbnyPrL9sdzdFkGt-=w210-h116-nd-ns-p-rp',
    'https://yt3.ggpht.com/ImSxwv-x3TBYxjwysBmbkJjlxF5viCqQqgZ8RX35iP5_UbfXkATBjwRnFIMPshjFmQbBlLM1FL0p=w210-h116-nd-ns-p-rp'
  ];

  constructor() { }

  ngOnInit() {
  }

}
