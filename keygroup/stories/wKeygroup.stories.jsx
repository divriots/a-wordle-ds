import '..';
import '~/theme/src/wordle.scss';
import './story.scss';

import { html } from 'lit-html';

export default {
  parameters: {
    layout: 'centered',
  },
};

const keys = JSON.stringify(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']);
export const keygroup = () => html`<w-keygroup keys="${keys}"></w-keygroup>`;

const keysMods = JSON.stringify([
  { key: 'enter', mod: 'true' },
  'z',
  'x',
  { key: 'c', state: 1 },
  'v',
  { key: 'b', state: 0 },
  { key: 'n', state: 2 },
  { key: 'm' },
  { key: '⌫', mod: 'true', icn: 'true' },
]);
export const keygroupMods = () =>
  html`<w-keygroup keys="${keysMods}"></w-keygroup>`;
