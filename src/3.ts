import { getCsv } from "./util";
const data = getCsv("3");

let shortestDistance = Infinity;

const wirePath = (wire: string[], callback: Function) => {
  let x = 0;
  let y = 0;

  const xmap = { U: 0, D: 0, L: -1, R: 1 };
  const ymap = { U: -1, D: 1, L: 0, R: 0 };

  wire.forEach(e => {
    const direction = e[0];
    const count = parseInt(e.substr(1));

    const xdirection = xmap[direction];
    const ydirection = ymap[direction];

    for (let i = 0; i < count; i++) {
      x += xdirection;
      y += ydirection;
      callback(x, y);
    }
  });
};

const points = {};
const memoWire = (x: number, y: number) => {
  points[`${x},${y}`] = true;
};

const checkWire = (x: number, y: number) => {
  if (points[`${x},${y}`] === true) {
    shortestDistance = Math.min(shortestDistance, Math.abs(x) + Math.abs(y));
  }
};

wirePath(data[0], memoWire);
wirePath(data[1], checkWire);

console.log(shortestDistance);
