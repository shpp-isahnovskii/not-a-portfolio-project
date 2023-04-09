<template>
  <button
    class="blow-btn text-8xl absolute top-1/2 left-1/2 translate-x-[-50%]"
    @click.prevent="confettiLaunch"
  >
    {{ scene.background }}
  </button>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useEmojiStore } from 'store';

import { ConfettiItem } from '~~/interfaces/confetti-item';

const { scene } = storeToRefs(useEmojiStore());

const FPS = Math.floor(1000 / 60);
const sceneLifeTime = 180;

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

const sceneBase: Ref<{ [key: string]: ConfettiItem[] }> = ref({});
const baseIsEmpty: ComputedRef<boolean> = computed(() => Object.keys(sceneBase.value).length === 0);

const dx = 10;
const rotationSpeed = 10;

/* power of the launch */
const minDy = 10;
const maxDy = 17;

const gravity = 0.5;
const projectiles = 20;

const resizeObserver = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  ctx.font = '30px arial';
};

onMounted(() => {
  canvasInit();
  window.addEventListener('resize', resizeObserver);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeObserver);
});

const canvasInit = () => {
  canvas = document.createElement('canvas');
  if (!canvas.getContext) {
    window.alert("HTML Canvas is not supported by your browser");
    return;
  }
  /* entry point */
  (document.getElementById('__nuxt') as HTMLElement).appendChild(canvas);
  resizeObserver();
};

const confettiLaunch = () => {
  const stackIsEmpty = baseIsEmpty.value;
  addNewCannon();
  if (stackIsEmpty) frameTick();
};

const addNewCannon = () => {
  const randomId: string = Math.random().toString().replace('0.', '');
  sceneBase.value[randomId] = cannonInit();
};

const cannonInit = (): ConfettiItem[] => {
  let grapeshot: ConfettiItem[] = [];
  let particles = projectiles;

  while (particles--) {
    grapeshot.push({
      name: scene.value.emoji[particles % scene.value.emoji.length],
      x: canvas.width / 2,
      y: canvas.height / 2,
      dx: randomRange(-dx, dx),
      dy: randomRange(-minDy, -maxDy),
      angle: 0,
      lifeTime: 0,
    });
  }
  return grapeshot;
};

const drawScene = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawItems();
};

const drawItems = (): void => {
  Object.keys(sceneBase.value).forEach((key: string) => {
    if (isAnimationOver(key)) {
      deleteCanon(key);
      return;
    }

    sceneBase.value[key].forEach((item: ConfettiItem, index: number) => {
      drawItem(item);
      sceneBase.value[key][index] = updateItemPhysics(item);
    });
  });
};

const drawItem = (element: ConfettiItem) => {
  ctx.translate(element.x, element.y);
  ctx.rotate((element.angle * Math.PI) / 180);
  ctx.strokeText(element.name, 0, 0);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
};

const updateItemPhysics = (item: ConfettiItem): ConfettiItem => {
  item.y = item.y + item.dy;
  item.x = item.x + item.dx;
  item.dy = item.dy + gravity;
  item.angle += rotationSpeed * Math.sign(item.dx);
  item.lifeTime++;

  return item;
};

const frameTick = (): void => {
  if (baseIsEmpty.value) return;
  drawScene();
  setTimeout(() => {
    window.requestAnimationFrame(frameTick);
  }, FPS);
};

const isAnimationOver = (id: string) =>
  sceneBase.value[id][0].lifeTime >= sceneLifeTime;

const deleteCanon = (id: string) => {
  delete sceneBase.value[id];
};

const randomRange = (min: number, max: number): number => {
  return Math.random() * (max - min + 1) + min;
};
</script>

<style>
canvas {
  pointer-events: none;
  position: fixed;
  z-index: 10;
}
.blow-btn:hover {
  animation: 0.2s linear example infinite;
}

@keyframes example {
  0% {
    padding-left: 0px;
  }
  20% {
    padding-left: -4px;
  }
  40% {
    padding-left: 5px;
  }
  60% {
    padding-left: -4px;
  }
  80% {
    padding-left: 3px;
  }
  100% {
    padding-left: 0px;
  }
}
</style>
