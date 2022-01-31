import { customElement } from 'solid-element';
import '~/keygroup';

const props = {
  groups: [],
};

customElement('w-keyboard', props, (props, { element }) => {
  if (typeof props.groups === 'string') {
    props.groups = JSON.parse(props.groups);
  }

  return (
    <section part="keyboard">
      <For each={props.groups}>
        {(group) => (
          <w-keygroup
            keys={group}
            exportparts="keygroup:keygroup,key:key,keycap:keycap"
          ></w-keygroup>
        )}
      </For>
    </section>
  );
});
