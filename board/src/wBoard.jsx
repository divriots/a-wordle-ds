import { customElement } from 'solid-element';
import { splitProps, createSignal } from 'solid-js';
import '~/word';

const props = {
  state: [],
  len: 5,
  tries: 6,
};

customElement('w-board', props, (props, { element }) => {
  let [{ state, len, tries }] = splitProps(props, ['state', 'len', 'tries']);

  if (typeof state === 'string') {
    state = JSON.parse(state);
  }

  state = [...state, ...Array(tries).fill([])].slice(0, tries);

  const [_state, setState] = createSignal(state);
  element.setState = setState;

  return (
    <section
      part="board"
      style={{
        '--board-length': len,
        '--board-tries': tries,
      }}
    >
      <For each={_state()}>
        {(word) => (
          <w-word
            word={word}
            len={len}
            exportparts="cardfront:cardfront,card:card,word:word"
          ></w-word>
        )}
      </For>
    </section>
  );
});
