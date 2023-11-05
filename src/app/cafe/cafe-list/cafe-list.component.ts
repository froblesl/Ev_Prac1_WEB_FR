import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<Cafe> = []
  constructor() { }

  ngOnInit() {
  }

}
