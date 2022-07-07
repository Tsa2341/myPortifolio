import { SocialLink } from './../../interfaces/redux.interface';
import {
  socialLinkErrorAction,
  getSocialLinksAction,
} from './../../redux/actions/socialLink.actions';
import { Subscription, Observable } from 'rxjs';
import { SocialLinksState } from 'src/interfaces/redux.interface';
import { Injectable, OnDestroy } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
} from '@angular/fire/firestore';
import { Store } from '@ngrx/store';

const socialLinks = [
  {
    name: 'fiverr',
    icon: 'https://res.cloudinary.com/tsa2341/image/upload/v1654886480/my-portifolio/fiverr-icon_c4pzkb.svg',
    url: ' https://www.fiverr.com/tsalan',
  },
  {
    name: 'github',
    icon: 'https://res.cloudinary.com/tsa2341/image/upload/v1654886479/my-portifolio/github-icon_t4y739.svg',
    url: 'https://github.com/tsa2341',
  },
  {
    name: 'gmail',
    icon: 'https://res.cloudinary.com/tsa2341/image/upload/v1654886479/my-portifolio/gmail-icon_iltree.svg',
    data: 'alanshema2002@gmail.com',
  },
  {
    name: 'linkedIn',
    icon: 'https://res.cloudinary.com/tsa2341/image/upload/v1654886479/my-portifolio/Vectorlinkedin-icon_arecen.svg',
    url: 'www.linkedin.com/in/shema-alain',
  },
  {
    name: 'phone',
    icon: 'https://res.cloudinary.com/tsa2341/image/upload/v1654886479/my-portifolio/phone-icon_ycvqnb.svg',
    data: '+250787996085',
  },
  {
    name: 'upwork',
    icon: 'https://res.cloudinary.com/tsa2341/image/upload/v1654886479/my-portifolio/upwork-icon_liurik.svg',
    url: 'https://www.upwork.com/freelancers/~01dab3b293f178334a',
  },
];

@Injectable({
  providedIn: 'root',
})
export class FirebaseService implements OnDestroy {
  socialLinkSubscription: Subscription;

  constructor(
    private firestore: Firestore,
    private store: Store<{ socialLinks: SocialLinksState }>
  ) {
    const socialLinkCollection = collection(this.firestore, 'social-links');
    const socialLinks: Observable<SocialLinksState['links']> = collectionData(
      socialLinkCollection
    ) as Observable<SocialLinksState['links']>;

    this.socialLinkSubscription = socialLinks.subscribe({
      next: (links) => {
        // if no social links seed them
        console.log(links, 'links');
        if (!links || links.length === 0) {
          console.log('seeding data runned');

          this.seedSocialLinks();
        }
        this.store.dispatch(getSocialLinksAction({ links }));
      },
      error: (error) => {
        this.store.dispatch(socialLinkErrorAction(error));
      },
    });
  }

  seedSocialLinks() {
    const socialLinkCollection = collection(this.firestore, 'social-links');

    Promise.all([
      ...socialLinks.map((link: SocialLink) => {
        return addDoc(socialLinkCollection, link);
      }),
    ]).finally(() => {
      console.log('finished seeding >>>>>>>>>>>>>>>>>>>>>>>>>.');
    });
  }

  ngOnDestroy(): void {
    this.socialLinkSubscription.unsubscribe();
  }
}
