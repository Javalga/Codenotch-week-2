export const startsWithM = (names: string[]) => {
  let starts = true
  let i = 0
  while (i < names.length) {
    if (names[i][0] === 'M') {
      i++
    } else {
      starts = false
      return starts
    }
  }
}

console.log(startsWithM(['Jose', 'Maria', 'Manolo', 'Lola', 'Josefa']))