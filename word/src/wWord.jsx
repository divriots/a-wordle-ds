import { customElement } from 'solid-element';
import { splitProps } from 'solid-js';
import '~/card';

const props = {
  word: [],
  len: 5,
};

customElement('w-word', props, (props) => {
  const [local, { len }] = splitProps(props, ['word']);

  if (typeof local.word === 'string') {
    local.word = JSON.parse(local.word);
  }

  let letters = local.word.map((letter) =>
    typeof letter === 'string' ? { letter } : letter
  );

  letters = [...letters, ...Array(len).fill({})].slice(0, len);

  return (
    <div
      part="word"
      style={{
        '--word-length': len,
      }}
    >
      <For each={letters}>
        {(props) => (
          <w-card {...props} exportparts="front:cardfront" part="card"></w-card>
        )}
      </For>
    </div>
  );
});
