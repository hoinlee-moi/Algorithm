const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const sumWithInitial = array1.reduce(
  (acc, value) => acc + value,
  0
);

console.log(sumWithInitial);