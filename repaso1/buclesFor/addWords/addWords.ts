export const addWords = (words: string[]) => {
  let accumulated = 0
  for (let word in words) {
    accumulated += words[word].length
  }
  return accumulated
}

addWords(['Hello', 'my', 'name', 'is', 'Javi']);
