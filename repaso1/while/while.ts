export const hasEven = (numbers: number[]): boolean => {
  let i = 0
  while (i < numbers.length && numbers[i] % 2 !== 0) {
    i++
  }
  return i < numbers.length
}

console.log(hasEven([1, 3, 5, 7, 9]))