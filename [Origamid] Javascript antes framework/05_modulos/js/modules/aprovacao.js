export function Aprovacao(notaFinal) {;
  if(notaFinal >= 7){
    return 'FOI APROVADO!'
  } else if(notaFinal >=4) {
    return 'EM RECUPERAÇÃO!'
  } else {
     return 'FOI REPROVADO!'
  }
}