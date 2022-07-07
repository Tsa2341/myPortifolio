interface SocialLinkData {
  url: string;
  data: string;
}

export interface SocialLink extends Partial<SocialLinkData> {
  name: string;
  icon: string;
  // [x: Required<SocialLinkData>]: string;
}

export interface SocialLinksState {
  links: SocialLink[] | null;
  loadingGet: boolean;
  error: any;
}
