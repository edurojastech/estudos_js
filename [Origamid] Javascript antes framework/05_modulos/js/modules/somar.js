export default function Somar(...valores) {
  let totalSoma = 0
  valores.forEach((n) => {
    totalSoma += n
  })
  return totalSoma
}