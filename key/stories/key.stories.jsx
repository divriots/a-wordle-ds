import '..';
import '~/theme/src/wordle.scss';
import './story.scss';

import { html } from 'lit-html';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const key = () => html`<w-key key="q"></w-key>`;

export const keyAbsent = () => html`<w-key key="w" state="0"></w-key>`;

export const keyPresent = () => html`<w-key key="e" state="1"></w-key>`;

export const keyCorrect = () => html`<w-key key="r" state="2"></w-key>`;

export const keyMod = () => html`<w-key key="enter" mod="true"></w-key>`;

export const keyModIcn = () =>
  html`<w-key key="⌘" mod="true" icn="true"></w-key>`;
