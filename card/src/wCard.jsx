import { customElement } from 'solid-element';
import { splitProps } from 'solid-js';

const props = {
  letter: null,
  state: -1,
};

const colors = ['absent', 'present', 'correct'];

customElement('w-card', props, (props) => {
  const [{ letter, state }] = splitProps(props, ['letter', 'state']);

  return (
    <span
      part="front"
      style={{
        '--card-color-surface':
          +state > -1 ? `var(--w-color-${colors[+state]})` : null,
        '--card-color-text': +state > -1 ? 'var(--w-color-text-invert)' : null,
        '--card-color-border': !letter
          ? null
          : +state > -1
          ? `var(--w-color-${colors[+state]})`
          : 'var(--w-color-border-dark)',
      }}
    >
      {letter}
    </span>
  );
});
