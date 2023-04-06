import { defineStore } from 'pinia';

export interface SceneInterface {
  emoji: string,
  background: string,
}

export const useEmojiStore = defineStore('emoji', () => {
  const scene = ref<SceneInterface>({
    emoji:'💥',
    background: '🗻',
  });
  return { scene };
});
