<template>
  <aside class="absolute left-0 top-10">
    <ul class="flex flex-col">
      <li
        v-for="(item, key) in emojiSet"
        :key="key"
        :class="[
          'before:block before:absolute before:w-11 before:-inset-1 before:-skew-x-6 before:bg-emerald-200 before:hover:bg-emerald-300 before:hover:w-12 relative inline-block mb-3 pl-1 cursor-pointer z-0',
          {
            'before:w-12 before:bg-emerald-300 ':
              item.background === scene.background,
          },
        ]"
        @click="store.setScene(key as string)"
      >
        <span class="relative ml-1">{{ item.background }}</span>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useEmojiStore } from 'store';
import { emojiSet } from '~~/constants/emoji-set';

const store = useEmojiStore();
const { scene } = storeToRefs(store);
</script>
