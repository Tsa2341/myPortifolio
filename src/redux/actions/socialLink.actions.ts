import { links } from './../../utils/navigation-links';
import { SocialLinksState } from 'src/interfaces/redux.interface';
import { createAction, props } from '@ngrx/store';

export const getSocialLinksAction = createAction(
  '[Social Links] get social links',
  props<{ links: SocialLinksState['links'] }>()
);
export const loadingGetSocialLinksAction = createAction(
  '[Social Links] loading get social links'
);

// export const createSocialLink = createAction(
//   '[Social Links] create social link'
// );
// export const updateSocialLink = createAction(
//   '[Social Links] update social link'
// );
// export const deleteSocialLink = createAction(
//   '[Social Links] delete social link'
// );

export const socialLinkErrorAction = createAction(
  '[Social Links]  social links error',
  props<{ error: any }>()
);
