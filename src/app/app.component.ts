import { setTheme } from 'ngx-bootstrap/utils';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-portifolio';

  constructor() {
    setTheme('bs5'); // or 'bs4'
  }
}
