export const hasEven = (numbers: number[]): boolean => {
  let i = 0
  while (i < numbers.length) {
    if (numbers[i] % 2 === 0) {
      return true
    }
    i++
  }
  return false
}

console.log(hasEven([1, 2, 3, 4, 5, 6, 7, 8, 98, 6, 5, 3, 23, 4, 6, 6, 5, 4, 3]))