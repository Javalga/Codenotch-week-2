export const evenNumbers = (num: number): void => {
  for (let i = 0; i < num; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

evenNumbers(304)