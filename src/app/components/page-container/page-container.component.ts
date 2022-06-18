import { Component, OnInit } from '@angular/core';
import { links } from 'src/utils/navigation-links';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss'],
})
export class PageContainerComponent implements OnInit {
  links: Array<{ name: string; url: string }> = links;

  constructor() {}

  ngOnInit(): void {}
}
