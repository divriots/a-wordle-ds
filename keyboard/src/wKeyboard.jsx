import { customElement } from 'solid-element';
import { splitProps, createSignal } from 'solid-js';
import '~/keygroup';

const props = {
  groups: [],
};

customElement('w-keyboard', props, (props, { element }) => {
  let [{ groups }] = splitProps(props, ['groups']);

  if (typeof groups === 'string') {
    groups = JSON.parse(groups);
  }

  const [_groups, setGroups] = createSignal(groups);
  element.setGroups = setGroups;

  return (
    <section part="keyboard">
      <For each={_groups()}>
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
