export default function ehMaiorDeIdade(campo) {
  const dataNascimento = new Date(campo.value)
  console.log(dataNascimento)
  verificaIdade(dataNascimento)
  console.log(verificaIdade(dataNascimento))
}

function verificaIdade(data) {
  const dataAtual = new Date()
  const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

  return dataAtual >= dataMais18
}