import { isEven } from '../conditionals/isEven/isEven'
import { addWords } from '../buclesFor/addWords/addWords'

let arr1 = ['Casa', 'Coche', 'Ciudad', 'Cesta']
let arr2 = ['Barco', 'Baca', 'Bicicleta', 'Balon', 'Bisiesto', 'Brasil']
let arr3 = ['Venezuela', 'Veneno', 'Voltaje']
let myMatrix = [arr1, arr2, arr3]
let amountLetters = 0

for (let i = 0; i < myMatrix.length; i++) {
    amountLetters = addWords(myMatrix[i])
}

isEven(amountLetters)