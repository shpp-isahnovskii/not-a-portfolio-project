import { SceneInterface } from '~~/interfaces/scene-interface';

export const emojiSet: { [key: string]: SceneInterface; } = {
  volcano: {
    emoji: ['💥'],
    background: '🗻',
  },
  cauldron: {
    emoji: ['🍄', '🍏', '🍐'],
    background: '🌳',
  },
  lips: {
    emoji: ['❤️'],
    background: '💋',
  },
  moneybag: {
    emoji: ['🧾', '💵', '💎'],
    background: '💰',
  },
  bathroom: {
    emoji: ['🧻', '💩'],
    background: '🚽',
  },
};
