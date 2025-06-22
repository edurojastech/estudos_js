// usando for of

function somarValores (...valores) {
  let total = 0
  for (numero of valores) {
    total+=numero
  }

  return total
}

console.log(somarValores(5,8,6,9,77,55,15))