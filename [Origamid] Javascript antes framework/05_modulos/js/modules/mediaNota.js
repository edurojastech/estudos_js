export default function MediaNotas(...notas) {
  let totalSoma = 0
  notas.forEach((n) => {
    totalSoma += n
  })

  let notaFinal = totalSoma / notas.length
  return notaFinal.toFixed(2)
}