export const startsWithM = (names: string[]) => {
  let starts = true
  for (let name of names) {
    if (name[0] === 'M') {
      continue
    } else {
      starts = false
    }
  } return starts
}

console.log(startsWithM(['Jose', 'Maria', 'Manolo', 'Lola', 'Josefa']))