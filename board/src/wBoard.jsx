import { customElement } from 'solid-element';
import { splitProps, createMemo } from 'solid-js';
import '~/word';

const props = {
  state: [],
  len: 5,
  tries: 6,
};

customElement('w-board', props, (props, { element }) => {
  const [local, { len, tries }] = splitProps(props, ['state']);

  if (typeof local.state === 'string') {
    local.state = JSON.parse(local.state);
  }

  const _state = createMemo(() =>
    [...local.state, ...Array(tries).fill([])].slice(0, tries)
  );

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
