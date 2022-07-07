import { FirebaseService } from './services/firebase.service';
import { Component, OnDestroy } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'my-portifolio';

  constructor(private firebaseService: FirebaseService) {
    setTheme('bs5'); // or 'bs4'
  }

  ngOnDestroy(): void {}
}
