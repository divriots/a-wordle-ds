import '..';
import '~/theme/src/wordle.scss';
import './story.scss';

import { html } from 'lit-html';

export default {
  parameters: {
    layout: 'centered',
  },
};

const _word = JSON.stringify(['m', 'o', 'u', 's', 'e']);
export const word = () => html`<w-word word="${_word}"></w-word>`;

const _wordChecked = JSON.stringify([
  { letter: 't', state: 0 },
  { letter: 'r', state: 1 },
  { letter: 'e', state: 2 },
  { letter: 'n', state: 0 },
  { letter: 'd', state: 2 },
]);
export const wordChecked = () => html`<w-word word="${_wordChecked}"></w-word>`;

export const wordEmpty = () => html`<w-word></w-word>`;

const _wordHalf = JSON.stringify([{ letter: 'a' }, 's', 'd']);
export const wordHalf = () => html`<w-word word="${_wordHalf}"></w-word>`;
