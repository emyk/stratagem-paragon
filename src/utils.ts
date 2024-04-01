export const getRandomItem = <T>(list: T[]) => {
  return list[getRandom(0, list.length - 1)];
};

export const getRandom = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);
