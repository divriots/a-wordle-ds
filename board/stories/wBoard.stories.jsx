import '..';
import '~/theme/src/wordle.scss';
import './story.scss';

import { html } from 'lit-html';

export default {
  parameters: {
    layout: 'centered',
  },
};

const _state = JSON.stringify([
  [
    { letter: 'm', state: 0 },
    { letter: 'o', state: 1 },
    { letter: 'u', state: 1 },
    { letter: 's', state: 0 },
    { letter: 'e', state: 2 },
  ],
  [
    { letter: 't', state: 2 },
    { letter: 'r', state: 0 },
    { letter: 'e', state: 1 },
    { letter: 'n', state: 0 },
    { letter: 'd', state: 0 },
  ],
  ['a', 's', 'd'],
]);
export const board = () =>
  html`<w-board state="${_state}" len="5" tries="6"></w-keyboard>`;

export const boardEmpty = () => html`<w-board len="5" tries="6"></w-keyboard>`;
