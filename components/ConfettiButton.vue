<template>
  <div ref="target">
    <button
      class="celebrate-btn bg-emerald-400 hover:bg-emerald-300 text-white font-bold py-2 px-4 rounded-full tracking-wider shadow-lg shadow-emerald-400/50 hover:shadow-emerald-300/50 hover:scale-105 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
      @click.prevent="() => {}"
    >
      Celebrate now! 🎉
    </button>
  </div>
</template>

<script setup lang="ts">
let target = ref<null | HTMLElement>(null);
onMounted(() => {
  addCanvas();
});

const addCanvas = () => {
  const canvas = <HTMLCanvasElement>document.createElement('canvas');
  canvas.height = 600;
  canvas.width = 600;
  console.log(target.value);
  (target.value as HTMLElement).appendChild(canvas);
};
</script>
