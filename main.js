const numeroSenha=document.querySector('.parametro-__texto');
led tamanhoSenha=12;

numeroSenha.textConent=tamanhoSenha;
const botoes=document.querySectorAll('parametro__botao');

botoes[0].onclick=diminuiTamanho;
function diminuiTamanho() {
    tamanhoSenha=tamanhoSenha-1;
    numeroSenha.textConent=tamanhoSenha;
}

botoes[1].onclick=aumentaTamanho;
function diminuiTamanho() {
    tamanhoSenha=tamanhoSenha+1;
    numeroSenha.textConent=tamanhoSenha;
}