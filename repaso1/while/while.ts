export const hasEven = (numbers: number[]): boolean => {
  for (let number of numbers) {
    if (numbers[number] % 2 === 0) {
      return true
    }
  }
  return false
}

console.log(hasEven([1, 2, 3, 4, 5, 6, 7, 8, 98, 6, 5, 3, 23, 4, 6, 6, 5, 4, 3]))