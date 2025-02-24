//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// 1. Criar uma array para armazenar os nomes dos amigos
let amigos = [];

// 2. Função para agregar amigos
function adicionarAmigo(nome) {
  amigos.push(nome);
  console.log(`${nome} foi adicionado à lista de amigos.`);
}

// 3. Função para atualizar a lista de amigos
function atualizarAmigo(nomeAntigo, nomeNovo) {
  const index = amigos.indexOf(nomeAntigo);
  
  if (index !== -1) {
    amigos[index] = nomeNovo;
    console.log(`${nomeAntigo} foi atualizado para ${nomeNovo}.`);
  } else {
    console.log(`${nomeAntigo} não foi encontrado na lista.`);
  }
}

// 4. Função para sortear um amigo aleatoriamente
function sortearAmigo() {
  if (amigos.length === 0) {
    console.log("A lista de amigos está vazia.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  console.log(`O amigo sorteado é: ${amigos[indiceAleatorio]}`);
}

// Testando as funções
adicionarAmigo("João");
adicionarAmigo("Maria");
adicionarAmigo("Carlos");

atualizarAmigo("Maria", "Ana");

sortearAmigo();
