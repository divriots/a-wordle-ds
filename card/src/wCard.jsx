import { customElement } from 'solid-element';

const props = {
  letter: null,
  state: -1,
};

const colors = ['absent', 'present', 'correct'];

customElement('w-card', props, (props) => {
  return (
    <span
      part="front"
      style={{
        '--card-color-surface':
          +props.state > -1 ? `var(--w-color-${colors[+props.state]})` : null,
        '--card-color-text':
          +props.state > -1 ? 'var(--w-color-text-invert)' : null,
        '--card-color-border': !props.letter
          ? null
          : +props.state > -1
          ? `var(--w-color-${colors[+props.state]})`
          : 'var(--w-color-border-dark)',
      }}
    >
      {props.letter}
    </span>
  );
});
