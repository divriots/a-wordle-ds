import { customElement } from 'solid-element';
import '~/key';

const props = {
  keys: [],
};

customElement('w-keygroup', props, (props) => {
  if (typeof props.keys === 'string') {
    props.keys = JSON.parse(props.keys);
  }

  props.keys = props.keys.map((key) =>
    typeof key === 'string' ? { key } : key
  );

  return (
    <div part="keygroup">
      <For each={props.keys}>
        {(props) => {
          const { key, mod, space } = props;
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
