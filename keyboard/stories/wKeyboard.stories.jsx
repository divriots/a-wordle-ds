import '..';
import '~/theme/src/wordle.scss';
import './story.scss';

import { html } from 'lit-html';

export default {
  parameters: {
    layout: 'centered',
  },
};

const groups = JSON.stringify([
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  [
    { space: 0.5 },
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    { key: 'l' },
    { space: 0.5 },
  ],
  [
    { key: 'enter', mod: true },
    'z',
    'x',
    { key: 'c', state: 1 },
    'v',
    { key: 'b', state: 0 },
    { key: 'n', state: 2 },
    { key: 'm' },
    { key: '⌫', mod: true, icn: true },
  ],
]);
export const keyboard = () =>
  html`<w-keyboard groups="${groups}"></w-keyboard>`;
