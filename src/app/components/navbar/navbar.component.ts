import { Component, Input, OnInit } from '@angular/core';
import { links } from 'src/utils/navigation-links';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() pageContainer?: HTMLDivElement;
  homeIconDefaultColor = ['black'];
  homeIconStyle = { width: '25px', height: '25px' };
  breadCrumbsStyle = { width: '25px' };
  homeIconFill = this.homeIconDefaultColor;
  links: Array<{ name: String; url: string }> = links;

  homeIconMouseOver() {
    this.homeIconFill = ['#005aff'];
    this.pageContainer?.classList.add('black_class');
  }

  homeIconMouseOut() {
    this.homeIconFill = this.homeIconDefaultColor;
    this.pageContainer?.classList.remove('black_class');
  }

  handleOpenDrawer() {
    console.log(this.pageContainer?.classList);
    if (this.pageContainer?.classList.contains('open_drawer')) {
      this.pageContainer?.classList.remove('open_drawer');
    } else {
      this.pageContainer?.classList.add('open_drawer');
    }
  }

  // console.log(typeof this.pageContainer);

  constructor() {}

  ngOnInit(): void {}
}
