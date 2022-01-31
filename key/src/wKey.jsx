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
  const [{ key, state, mod, icn }] = splitProps(props, [
    'key',
    'state',
    'mod',
    'icn',
  ]);

  return (
    <kbd
      part="keycap"
      style={{
        '--key-color-surface': `var(--w-color-${colors[+state]})`,
        '--key-color-text': +state > -1 ? 'var(--w-color-text-invert)' : null,
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
