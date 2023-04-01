<template>
  <div ref="target">
    <button
      class="celebrate-btn bg-emerald-400 hover:bg-emerald-300 text-white font-bold py-2 px-4 rounded-full tracking-wider shadow-lg shadow-emerald-400/50 hover:shadow-emerald-300/50 hover:scale-105 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
      @click.prevent="animationHandler"
    >
      Celebrate now! 🎉
    </button>
  </div>
</template>

<script setup lang="ts">
let target = ref<null | HTMLElement>(null);
let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

let isLooping = ref(false);

onMounted(() => {
  addCanvas();
});

const addCanvas = () => {
  canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 600;
  (target.value as HTMLElement).appendChild(canvas);
  (ctx as any) = canvas.getContext('2d');
};

const animationHandler = () => {
  isLooping.value = !isLooping.value;

  if (isLooping.value) {
    let confetti = new Confetti(600 / 2 - 5, 500, 10, 'tomato');
    confetti.update();
  }
};

class Confetti {
  x: number;
  y: number;
  size: number;
  color: string;

  dy = -6;
  dx = 0;

  gravity = 0.1;

  constructor(x: number, y: number, size: number, color: string) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }
  update = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.draw();

    if (isLooping.value) window.requestAnimationFrame(this.update);

    this.dy += this.gravity;
    this.y += this.dy;
  };

  draw = () => {
    (ctx as CanvasRenderingContext2D).beginPath();
    ctx.moveTo(this.x, this.y);
    //move line to: right -> bottom -> left -> top
    ctx.lineTo(this.x + this.size, this.y);
    ctx.lineTo(this.x + this.size, this.y + this.size);
    ctx.lineTo(this.x, this.y + this.size);
    ctx.lineTo(this.x, this.y);
    ctx.closePath();

    ctx.fillStyle = this.color;
    ctx.fill();
  };
}
</script>
