class ChallengeCapgemini {

  // # Questão 01

  // Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * 
  //e espaços. A base e altura da escada devem ser iguais ao valor de n.
  //A última linha não deve conter nenhum espaço.
  // Exemplo:
  // Entrada:
  // n = 6


  // Saída:
  //      *
  //     **
  //    ***
  //   ****
  //  *****
  // ******

  stairs(steps){
    for(let i = 0; i <= steps; i++){
      console.log(" ".repeat(steps - i) + '*'.repeat(i))
    }
  }

    // # Questão 02

  // Débora se inscreveu em uma rede social para se manter em contato com seus amigos.
  // A página de cadastro exigia o preenchimento dos campos de nome e senha,
  // porém a senha precisa ser forte. O site considera uma senha forte quando
  // ela satisfaz os seguintes critérios:

  // Possui no mínimo 6 caracteres.
  // Contém no mínimo 1 digito.
  // Contém no mínimo 1 letra em minúsculo.
  // Contém no mínimo 1 letra em maiúsculo.
  // Contém no mínimo 1 caractere especial. Os caracteres especiais são: !@#$%^&*()-+

  // Débora digitou uma string aleatória no campo de senha, porém ela não tem certeza
  //  se é uma senha forte. Para ajudar Débora, construa um algoritmo que informe qua
  //  l é o número mínimo de caracteres que devem ser adicionados para uma string qualquer
  //  ser considerada segura.

  // Exemplo:
  // Entrada:
  // Ya3

  // Saída:
  // 3

  securePassword(password) {
    let weakPassword = 6 - password.length;
  
    if (password.length < 6) {
      return `Senha incompleta. Faltam ${weakPassword} caracteres para validar sua senha. `;
    } else if (
      password.match(/[a-z]+/) &&
      password.match(/[A-Z]+/) &&
      password.match(/[0-9]/) &&
      password.match(/[!|@|#|$|%|^|&|*|(|)|-|+]/)
    ) {
      return `Senha Forte`;
    } else {
      return `Verifique os critérios de senha forte e digite uma nova senha.`;
    }
  }

    /*# Questão 03
  Duas palavras podem ser consideradas anagramas de si mesmas se as letras de uma
  palavra podem ser realocadas para formar a outra palavra. Dada uma string qualquer, 
  desenvolva um algoritmo que encontre o número de pares de substrings que são anagramas.

  Exemplo:

  Exemplo 2)
  Entrada:
  ifailuhkqq

  Saída:
  3

  Explicação:
  A lista de todos os anagramas pares são: [i, i], [q, q] e [ifa, fai] que 
  estão nas posições [[0, 3]], [[8, 9]] e [[0, 1, 2], [1, 2, 3]].*/

  anagram(string) {

    let combinations = [];
  
    for (let i = 0; i < string.length; i++) {
      for (let j = i +1; j < string.length + 1; j++) {
        combinations.push(string.slice(i, j))
      }
    }
  
    let organized = [];
  
    for (let i = 0; i < combinations.length; i++) {
      string = combinations[i].split('').sort().join('');
      if (!organized.hasOwnProperty(string)) {
        organized[string] = [];
      }
      organized[string].push(combinations[i]);
    }
    
    let totalAnagrams = 0
    
    for (let obj in organized) {
      if (organized[obj].length > 1) {
        totalAnagrams++
      }
    }
  
    return `O total de pares de substrings que são anagramas é ${totalAnagrams}.`
    
  }
  
}

let challenge = new ChallengeCapgemini()

console.log('**** Challenge 01 ****')
challenge.stairs(6)
console.log()

console.log('**** Challenge 02 ****')
console.log()
console.log(challenge.securePassword('2*4m'))
console.log()

console.log('**** Challenge 03 ****')
console.log()
console.log(challenge.anagram('ifailuhkqq'))
console.log()
console.log('********************')
