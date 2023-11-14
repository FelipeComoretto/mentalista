//var numeroSecreto = parseInt(Math.random() * 1001)
var numeroSecreto = 5
//Enquanto o chute for diferente do número secreto
while (chute != numeroSecreto) {
  var chute = prompt('Digite um número entre 0 e 1000')
  //Se o chute for igual ao número secreto
  if (chute == numeroSecreto) {
    alert('Acertou!')
  } else if (chute > numeroSecreto) {
    alert('Errou... o número secreto é menor')
  } else if (chute < numeroSecreto) {
    alert('Errou... o número secreto é maior')
  }
}