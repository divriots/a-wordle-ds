import '..';
import '~/theme/src/wordle.scss';
import './story.scss';

import { html } from 'lit-html';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const card = () => html`<w-card></w-card>`;

export const cardInput = () => html`<w-card letter="q"></w-card>`;

export const cardAbsent = () => html`<w-card letter="w" state="0"></w-card>`;

export const cardPresent = () => html`<w-card letter="e" state="1"></w-card>`;

export const cardCorrect = () => html`<w-card letter="r" state="2"></w-card>`;
