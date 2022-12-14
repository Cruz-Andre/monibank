import ehUmCPF from "./validaCPF.js"

// captura(seleciona) todos os campos que tem required 
const camposDoFormulario = document.querySelectorAll("[required]")

// para usar o .map() tem que transformar o camposDoFormulario em um array, visto que ele é um nodeList
var i = camposDoFormulario.forEach(campo => campo.addEventListener("blur", () => verificaCampo(campo)))

function verificaCampo(campo) {
  console.log(campo)
  if (campo.name == 'cpf' && campo.value.length >= 11) {
    ehUmCPF(campo)
  }
}