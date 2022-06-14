import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-icon',
  templateUrl: './home-icon.component.html',
  styleUrls: ['./home-icon.component.scss'],
})
export class HomeIconComponent implements OnInit {
  @Input() style: object = {};
  @Input() fill: Array<string> = ['black'];

  constructor() {}

  ngOnInit(): void {}
}
