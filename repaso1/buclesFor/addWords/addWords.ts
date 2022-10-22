export const addWords = (words: string[]) => {
  let accumulated = 0
  for (let word in words) {
    accumulated += words[word].length
  }
  return accumulated
}

console.log(addWords(['Hello', 'my', 'name', 'is', 'Javi']));
