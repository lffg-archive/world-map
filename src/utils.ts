import type { CoordObj, Coord, Coords, Size } from './types';

export function findEdgeCoords(coords: Coords) {
  let minX = null;
  let minY = null;
  let maxX = null;
  let maxY = null;

  for (const [x, y] of coords) {
    if (!minX || x < minX) minX = x;
    if (!minY || y < minY) minY = y;
    if (!maxX || x > maxX) maxX = x;
    if (!maxY || y > maxY) maxY = y;
  }

  return { minX, minY, maxX, maxY };
}

export function canvifyCoords(coords: Coords, padding: CoordObj) {
  const { minX, minY, maxX, maxY } = findEdgeCoords(coords);
  const absMinX = Math.abs(minX);
  const absMinY = Math.abs(minY);

  console.log(findEdgeCoords(coords));
  console.log({ absMinX, absMinY });

  const newCoords = coords.map<Coord>(([x, y]) => [
    absMinX + x + padding.x,
    absMinY + y + padding.y
  ]);

  return {
    coords: newCoords,
    size: {
      width: absMinX + maxX + padding.x * 2,
      height: absMinY + maxY + padding.y * 2
    }
  };
}

export function createCanvas(size: Size) {
  const canvas = document.createElement('canvas');
  Object.assign(canvas, size);

  const ctx = canvas.getContext('2d');

  return {
    canvas,
    ctx
  };
}
