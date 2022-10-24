export const startsWithM = (names: string[]) => {
  let starts = true
  let i = 0
  while (i < names.length && names[i][0] !== 'M') {
    i++
  }
  return i < names.length
}

console.log(startsWithM(['Jose', 'Maria', 'Manolo', 'Lola', 'Josefa']))