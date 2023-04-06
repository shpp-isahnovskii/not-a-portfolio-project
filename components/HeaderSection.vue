<template>
  <header class="bg-orange-300 w-full h-1 z-10">
    <ul class="flex">
      <li
        class="before:block before:absolute before:w-12 before:-inset-1 before:-skew-y-6 before:bg-emerald-300 before:hover:bg-emerald-200 before:hover:-inset-y-2 relative inline-block mr-2 ml-2 cursor-pointer w-13 z-0"
      >
        <span class="relative ml-1">{{ scene.background }}</span>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useEmojiStore } from 'store';
const { scene } = storeToRefs(useEmojiStore());
</script>
