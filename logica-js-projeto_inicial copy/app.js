alert('Seja bem vindo(a) ao NUMBER SECRET');

// Declaarando Secretnumber e colocando ele no console do browser
let Secretnumber = 3;
console.log(Secretnumber);

// Efetuando a pergunta
let pergunta = prompt('Digite um número de 1 a 10:');
console.log('Var pergunta completo')
console.log('Iniciando estrutura de condição...')
// condições
if (pergunta == Secretnumber) {
    console.log('pergunta == Secretnumber? True')
    alert(`Caraca, você conseguiu achar o número ${Secretnumber}, PARABÉNSSS`);
}                                   
else {
    console.log('pergunta == Secretnumber? False')
    console.log(`User: ${pergunta}`)
    alert('Você errou!');
}