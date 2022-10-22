export const myRevert = (arr: number[]): number[] => {
  let reversedArr = new Array<number>
  for (let i = 1; i < arr.length + 1; i++) {
    reversedArr.push(arr[arr.length - i])
  }
  return reversedArr
}

console.log(myRevert([1, 2, 3, 4, 5]))