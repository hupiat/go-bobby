export const doubleEquality = (i: number, j: number, entity: [number, number]) =>
  !!entity && entity[0] === i && entity[1] === j;

export const objectsDoubleEquality = (first: [number, number], other: [number, number]) =>
  !!first && !!other && first[0] === other[0] && first[1] === other[1];