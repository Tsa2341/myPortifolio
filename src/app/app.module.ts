import { socialLinkReducer } from './../redux/reducers/socialLink.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import {
  provideRemoteConfig,
  getRemoteConfig,
} from '@angular/fire/remote-config';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NotFoundComponent } from './views/not-found/not-found.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './views/about/about.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeIconComponent } from './components/home-icon/home-icon.component';
import { BreadCrumbsIconComponent } from './components/bread-crumbs-icon/bread-crumbs-icon.component';
import { LinksWrapperComponent } from './components/social-links/links-wrapper/links-wrapper.component';
import { LinkContainerComponent } from './components/social-links/link-container/link-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavbarComponent,
    PageContainerComponent,
    HomePageComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    HomeIconComponent,
    BreadCrumbsIconComponent,
    LinksWrapperComponent,
    LinkContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideRemoteConfig(() => getRemoteConfig()),
    AngularFirestoreModule.enablePersistence(),
    BrowserAnimationsModule,
    StoreModule.forRoot(
      {
        socialLinks: socialLinkReducer,
      },
      {}
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      // logOnly: environment.production,
      autoPause: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
