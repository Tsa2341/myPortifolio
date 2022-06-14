import {
  Component,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { PageContainerComponent } from '../page-container/page-container.component';

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

  homeIconMouseOver() {
    this.homeIconFill = ['#005aff'];
    this.pageContainer?.classList.add('black_class');
  }

  homeIconMouseOut() {
    this.homeIconFill = this.homeIconDefaultColor;
    this.pageContainer?.classList.remove('black_class');
  }

  // console.log(typeof this.pageContainer);

  constructor() {}

  ngOnInit(): void {}
}
