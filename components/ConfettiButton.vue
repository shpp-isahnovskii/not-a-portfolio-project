<template>
  <div ref="target">
    <button
      class="celebrate-btn bg-emerald-400 hover:bg-emerald-300 text-white font-bold py-2 px-4 rounded-full tracking-wider shadow-lg shadow-emerald-400/50 hover:shadow-emerald-300/50 hover:scale-105 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
      @click.prevent="confettiLaunch"
    >
      Celebrate now! 🎉
    </button>
  </div>
</template>

<script setup lang="ts">
const FPS = Math.floor(1000 / 60);

let target = ref<null | HTMLElement>(null);
let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

let isAction = ref(false);

const cannon: any[] = [];
let dx = 3;

/* power of the launch */
let minDy = 15;
let maxDy = 17;

let gravity = 0.5;
let projectiles = 20;

//rotation speed in rotationSpeeds
const maxRS = 35;
const minRS = 5;

onMounted(() => {
  canvasInit();
  confettiInit();
});

const canvasInit = () => {
  canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 600;
  (target.value as HTMLElement).appendChild(canvas);
  (ctx as any) = canvas.getContext('2d');

  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  ctx.font = '30px arial';
};

const confettiLaunch = () => {
  isAction.value = !isAction.value;
  frameTick();
};

const confettiInit = () => {
  while (projectiles--) {
    cannon.push({
      name: '🎉',
      x: canvas.width/2,
      y: canvas.height/2,
      dx: randomRange(-dx, dx),
      dy: randomRange(-minDy, -maxDy),
      rotationSpeed: randomRange(minRS, maxRS),
    });
  }
};

const drawItem = (element: any) => {
  ctx.translate(element.x, element.y);
  ctx.rotate((element.rotationSpeed * Math.PI) / 180);

  ctx.strokeText(element.name, 0, 0);

  ctx.setTransform(1, 0, 0, 1, 0, 0);
};

const frameTick = async () => {
  if (isAction.value) {

    drawScene();

    setTimeout(() => {
      window.requestAnimationFrame(frameTick);
    }, FPS);
  }
};

/* the scene */
const drawScene = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  cannon.forEach((item: Object, index: number) => {
    drawItem(item);
    cannon[index] = updateItemPhysics(item);
  });
};

const updateItemPhysics = (item: any) => {
  item.y = item.y + item.dy;
  item.x = item.x + item.dx;
  item.dy = item.dy + gravity;
  item.rotationSpeed = item.rotationSpeed + 1;
  return item;
};

const randomRange = (min: number, max: number) => {
  return Math.random() * (max - min + 1) + min;
};



</script>

<style>
canvas {
  border: 1px solid blue;
}
</style>
