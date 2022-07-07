import {
  loadingGetSocialLinksAction,
  socialLinkErrorAction,
} from './../actions/socialLink.actions';
import { createReducer, on } from '@ngrx/store';
import { getSocialLinksAction } from '../actions/socialLink.actions';
import { SocialLinksState } from 'src/interfaces/redux.interface';

const initialState: SocialLinksState = {
  links: null,
  loadingGet: true,
  error: null,
};

export const socialLinkReducer = createReducer(
  initialState,
  on(getSocialLinksAction, (state, { links }) => ({
    ...state,
    links: links,
    loadingGet: false,
    error: null,
  })),
  on(loadingGetSocialLinksAction, (state) => ({
    ...state,
    loadingGet: true,
    error: null,
  })),
  on(socialLinkErrorAction, (state, { error }) => ({
    ...state,
    loadingGet: false,
    error: error,
  }))
);
