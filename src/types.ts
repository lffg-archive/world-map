export interface CoordObj {
  x: number;
  y: number;
}

export type Coord = readonly [number, number];
export type Coords = readonly Coord[];

export interface Size {
  width: number;
  height: number;
}
