import { customElement } from 'solid-element';
import { splitProps } from 'solid-js';
import '~/key';

const props = {
  keys: [],
};

customElement('w-keygroup', props, (props) => {
  let [{ keys }] = splitProps(props, ['keys']);

  if (typeof keys === 'string') {
    keys = JSON.parse(keys);
  }

  const _keys = keys.map((key) => (typeof key === 'string' ? { key } : key));

  return (
    <div part="keygroup">
      <For each={_keys}>
        {(props) => {
          const [{ key, mod, space }] = splitProps(props, [
            'key',
            'mod',
            'space',
          ]);
          return key ? (
            <w-key
              style={{
                '--key-flex': mod ? 'var(--w-key-flex-mod)' : null,
              }}
              {...props}
              exportparts="keycap:keycap"
              part="key"
            ></w-key>
          ) : (
            <span
              style={{
                flex: space,
              }}
            ></span>
          );
        }}
      </For>
    </div>
  );
});
