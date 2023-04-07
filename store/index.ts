import { defineStore } from 'pinia';

import { emojiSet } from '~~/constants/emoji-set';
import { SceneInterface } from '~~/interfaces/scene-interface';

export const useEmojiStore = defineStore('emoji', () => {
  const scene = ref<SceneInterface>({
    emoji: emojiSet.volcano.emoji,
    background: emojiSet.volcano.background,
  });

  const setScene = (key: string) => {
    scene.value = {
      emoji: emojiSet[key].emoji,
      background: emojiSet[key].background,
    };
  };
  return { scene, setScene };
});
