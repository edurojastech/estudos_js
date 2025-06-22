// uso do for In

const aluno = {
  curso: "Desenvolvimento Web",
  semestres: 4,
  categoria: "TECH"
}

for(const item in aluno){
  console.log(`${item}: ${aluno[item]}`)
}