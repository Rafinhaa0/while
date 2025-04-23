
// var velocidade = 100; 

// while(velocidade > 0) {
//     alert("O carro está a " + velocidade + " por hora")
//     velocidade -= 20;
    
//     alert("Diminuiu 20 km")

// }

// alert("O carro parou")


// const turista = prompt("E aí, turista! Qual é o seu nome?")
// let cidades = ""
// let contagem = 0

// let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")

// while (continuar === "Sim") {
//     let cidade = prompt("Qual é o nome da cidade visitada?")
//     cidades += " - " + cidade + "\n"
//     contagem++
//     continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
//   }

//   alert(
//     "Turista: " + turista +
//     "\nQuantidade de cidades visitadas: " + contagem +
//     "\nCidades visitadas:\n" + cidades
//   )

  
  var Quantidade = parseFloat(prompt("Qual o valor que tem disponivel")) ;
  
  alert("O valor é de " + Quantidade + " Reais");

  var acao = prompt("Deseja Adicionar, Remover ou sair? ");
  


  while (acao === "Adicionar") { 
    var add = parseFloat(prompt("Quantos deseja adicionar? "));
    var resultado = Quantidade + add; 

    alert(`O resultado agora é de ${resultado}`);


    acao = prompt("Deseja Adicionar, Remover ou sair? ");

    if (acao === "Remover") {
        var remover = parseFloat(prompt("Quantos deseja remover? "));
        var removerResultado = acao - remover; 

        alert(`O resultado agora é de ${removerResultado}`);

        

    } else {
        alert(`Voce saiu e o resultado é de ${Quantidade}`)
    }





  }

let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"))
let opcao = ""

let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"))
let opcao = ""

do {
  opcao = prompt(
    "Saldo disponível: R$ " + saldo +
    "\n1 - Adicionar dinheiro" +
    "\n2 - Remover dinheiro" +
    "\n3 - Sair"
  )

} while (opcao !== "3");

let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"))
let opcao = ""

do {
  opcao = prompt(
    "Saldo disponível: R$ " + saldo +
    "\n1 - Adicionar dinheiro" +
    "\n2 - Remover dinheiro" +
    "\n3 - Sair"
  )

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado:"))
      break
    case "2":
      saldo -= prompt("Informe o valor a ser removido:")
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Entrada inválida.")
      break
  }
} while (opcao !== "3");




  

