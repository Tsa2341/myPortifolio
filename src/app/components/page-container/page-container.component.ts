import { Component, OnInit } from '@angular/core';
import { links } from 'src/utils/navigation-links';
import { handleOpenDrawer } from 'src/helpers/bread-crumbs-icon.helper';
import { breadCrumbsStyle } from 'src/utils/bread-crumbs.util';
import {
  drawerSlideAnim,
  innerContainerSlideAnim,
} from 'src/animations/navigation.anim';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss'],
  animations: [drawerSlideAnim, innerContainerSlideAnim],
})
export class PageContainerComponent implements OnInit {
  links: Array<{ name: string; url: string }> = links;
  showDrawer: boolean = false;
  breadCrumbsStyle = breadCrumbsStyle;

  handleOpenDrawer: Function = () => {
    this.showDrawer = handleOpenDrawer(this.showDrawer).showDrawer;
  };

  handleLinkMouseOver(e: MouseEvent) {
    (e.target as HTMLElement).classList.add('link_hovered');
  }
  handleLinkMouseOut(e: MouseEvent) {
    (e.target as HTMLElement).classList.remove('link_hovered');
  }

  constructor() {}

  ngOnInit(): void {}
}
