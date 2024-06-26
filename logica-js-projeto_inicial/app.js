alert('Seja bem vindo(a) ao NUMBER SECRET');

// Declarando Secretnumber e colocando ele no console do browser
let pergunta;
let dica;
let Secretnumber = 3;
let contagem = 0;

console.log(Secretnumber);


// Enquanto a pergunta for difgrente do Secretnumber ele continuara o loop
while (true) {
    
    // Executando novamente a pergunta
    pergunta = prompt('Digite um número de 1 a 10:');
    console.log(`User: ${pergunta}`);
    console.log('var: pergunta --> completo');
    
    if (contagem == 0) {
        console.log('primeira tentativa');
        contagem++;
    } else {
        contagem++;
    };


    if (pergunta == Secretnumber){
        break;
    } else {
        alert('Errou!');
        dica = prompt('Dica? Sim/Não');

        if (dica == 'Sim') {
            if (pergunta > Secretnumber) {
                alert(`O Secret Number é menor que ${pergunta}`);
            } else {
                alert(`O Secret Number é maior que ${pergunta}`);
            }
        } else {};
    };
};
console.log('pergunta == Secretnumber? True');
alert(`Caraca, você conseguiu achar o número ${Secretnumber}, PARABÉNSSS`);
alert(`Você precisou de ${contagem} tentativas para descobrir o segredo.`);

