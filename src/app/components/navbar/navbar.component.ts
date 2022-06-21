import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { linkHoverAnim } from 'src/animations/navigation.anim';
// import { handleOpenDrawer } from 'src/helpers/bread-crumbs-icon.helper';
import { breadCrumbsStyle } from 'src/utils/bread-crumbs.util';
import { links } from 'src/utils/navigation-links';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [linkHoverAnim],
})
export class NavbarComponent implements OnInit {
  @Output() openDrawerEvent = new EventEmitter<void>();

  homeIconDefaultColor = ['black'];
  homeIconStyle = { width: '25px', height: '25px' };
  homeIconFill = this.homeIconDefaultColor;
  links: Array<{ name: String; url: string }> = links;
  breadCrumbsStyle = breadCrumbsStyle;

  handleOpenDrawer() {
    this.openDrawerEvent.emit();
  }

  homeIconMouseOver() {
    this.homeIconFill = ['#005aff'];
  }

  homeIconMouseOut() {
    this.homeIconFill = this.homeIconDefaultColor;
  }

  constructor() {}

  ngOnInit(): void {}
}
