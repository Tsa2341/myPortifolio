import {
  animation,
  useAnimation,
  transition,
  animate,
  trigger,
  style,
  state,
} from '@angular/animations';

export const drawerSlideAnim = trigger('drawerSlideInAnim', [
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate(
      '0.5s ease-in',
      style({ transform: 'none', display: 'flex !important' })
    ),
  ]),
  transition(':leave', [
    animate(
      '0.5s ease-in',
      style({ transform: 'translateX(100%)', display: '*' })
    ),
  ]),
]);

export const innerContainerSlideAnim = trigger('innerContainerSlideAnim', [
  state('slided', style({ transform: 'translateX(-80%) rotateY(-70deg)' })),
  state('default', style({ transform: '*' })),

  transition('* => *', [animate('0.5s ease-in')]),
]);

export const linkHoverAnim = trigger('linkHoverAnim', [
  state('hovered', style({ backgroundColor: 'green' })),
  state('unhovered', style({ backgroundColor: 'none' })),

  transition('* => *', [animate('2s ease-in-out')]),
]);
