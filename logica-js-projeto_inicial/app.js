alert('Seja bem vindo(a) ao NUMBER SECRET');

// Declarando Secretnumber e colocando ele no console do browser
let pergunta;
let dica;
let Secretnumber
let contagem = 0;
let teto = 100


console.log(Secretnumber);


// Enquanto a pergunta for difgrente do Secretnumber ele continuara o loop
while(true){
    // Gerando numero aleatorio
    Secretnumber = parseInt(Math.random() * teto + 1);

    while (true) {
        // Executando novamente a pergunta
        pergunta = prompt(`Digite um número de 1 a ${teto}`);
        console.log(`User: ${pergunta}`);
        
        contagem++

        // Se o user acerta ele finaliza, se nao ele continua seu loop
        if (pergunta == Secretnumber){
            break;
        } else {
            alert('Errou!');
            dica = prompt('Dica? Sim/Não');

            let palavraMaiorMenor = pergunta > Secretnumber ? 'menor' : 'maior';
            if (dica == 'Sim') {
                alert(`O Secret Number é ${palavraMaiorMenor} que ${pergunta}`)
            };
        };
    };

    // Se o valor de contagem for maior que 1 ele ira mostrar a palavra tentativa, senao tentativa
    let palavraTentativa = contagem > 1 ? 'tentativas' : 'tentativa';
    alert(`Você acertou com ${contagem} ${palavraTentativa}!`);
    
    let jogarNovamente = prompt('Jogar novamente? Sim/Não');

    // Se quiser joga novamente ele reinicia o loop
    if (jogarNovamente == 'Sim') {
        continue;
    // Se nao quiser ele sai do loop, como nao temos nada apos o loop, o codigo finaliza
    } else if (jogarNovamente == 'Nâo') {
        break;

    // Se a pessoa escrever algo nada a ver com nada ela ira ter que digitar novamente infinitamente ate que escreva Sim ou Nao
    } else {
        while (jogarNovamente != 'Sim' && jogarNovamente != 'Não') {
            jogarNovamente = prompt('Jogar novamente? Sim/Não');
            
            //Se escrever corretamente ele ira sair da repeticao
            if (jogarNovamente == 'Sim' || jogarNovamente == 'Não') {
                break;
            };
        };

        // Aqui fazemos a verificação, como ja temos o valor de jogarNovamente armazenado, apenas precisamos fazer o mesmo processo (sair do loop ou reiniciar)
        if (jogarNovamente == 'Sim') {
            continue;
        } else {
            break;
        };    
    };
    
};
