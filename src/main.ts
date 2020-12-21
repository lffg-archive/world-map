import { coords as rawCoords } from './coords';
import { canvifyCoords, createCanvas } from './utils';

const PADDING = {
  x: 20,
  y: 20
};

const { coords, size } = canvifyCoords(rawCoords, PADDING);

const { canvas, ctx } = createCanvas(size);
const target = document.querySelector('#target');
target.appendChild(canvas);

Object.assign(canvas.style, {
  transform: 'rotateX(180deg)',
  border: 'solid 3px #000'
});

for (const [x, y] of coords) {
  ctx.strokeRect(x, y, 1, 1);
}
