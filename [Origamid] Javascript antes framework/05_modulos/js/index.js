import { ToUpperCase } from "./modules/toUpperCase.js"
import Somar from "./modules/somar.js"
import MediaNotas from "./modules/mediaNota.js"
import { Aprovacao } from "./modules/aprovacao.js"

// usando modulo de formatar pra maiuscula
console.log(ToUpperCase('Sabrina'))
console.log(ToUpperCase('Amanda'))
console.log(ToUpperCase('Livia'))

// Somar
console.log(Somar(3,3, 40, 100))

// medias notas
const notas1 = MediaNotas(10, 10, 0)
const notas2 = MediaNotas(10, 8, 10)
const notas3 = MediaNotas(1, 8, 0)

console.log(notas1)
console.log(notas2)
console.log(notas3)
console.log(Aprovacao(notas1))
console.log(Aprovacao(notas2))
console.log(Aprovacao(notas3))