/*
Jogo de adivinhação de números, onde será gerado um número aleatório entre 1 e 100,
 e o jogador terá que adivinhar qual é esse número. A dica será se o número chutado
  é maior ou menor que o número secreto. O jogo acaba quando o jogador acertar o 
  número ou quando um número máximo de 3 tentativas for atingido.
*/

//Constante de um número secreto aleatório de 1 a 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 3;
let jogoEncerrado = false;

function verificarPalpite(){
    if(jogoEncerrado) return;

    const palpite = parseInt(document.getElementById("palpite").value);
    const mensagem = document.getElementById("mensagem");
    const tentativas = document.getElementById("tentativas");

    if (isNaN(palpite) ||  palpite < 1 || palpite > 100){
        mensagem.textContent = "Digite um número entre 1 e 10!";
        return;
    }

    if (palpite === numeroSecreto) {
        mensagem.textContent = "Parabéns! Você acertou!";
        tentativas.textContent = "";
        jogoEncerrado = true;
    } else{
        tentativasRestantes--;
        if (tentativasRestantes > 0) {
            mensagem.textContent = palpite < numeroSecreto
            ? "O número secreto é MAIOR. Tente novamente."
            : "O número secreto é MENOR. Tente novamente.";
            tentativas.textContent = `Você ainda tem ${tentativasRestantes} tentativa(S).`;
        } else{
            mensagem.textContent = `Você perdeu! O número secreto era ${numeroSecreto}.`;
            tentativas.textContent = "";
            jogoEncerrado = true;
            }
        }
    }
