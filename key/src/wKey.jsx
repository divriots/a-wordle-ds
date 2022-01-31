import { customElement } from 'solid-element';
import { splitProps } from 'solid-js';

const props = {
  key: null,
  state: -1,
  mod: false,
  icn: false,
};

const colors = ['absent', 'present', 'correct'];

customElement('w-key', props, (props) => {
  const [local, { key, mod, icn }] = splitProps(props, ['state']);

  return (
    <kbd
      part="keycap"
      style={{
        '--key-color-surface': `var(--w-color-${colors[+local.state]})`,
        '--key-color-text':
          +local.state > -1 ? 'var(--w-color-text-invert)' : null,
        '--key-fontsize':
          mod && !icn
            ? 'var(--w-key-fontsize-mod)'
            : icn
            ? 'var(--w-key-fontsize-icn)'
            : null,
      }}
    >
      {key}
    </kbd>
  );
});
