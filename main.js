const numeroSenha=document.querySector('.parametro-__texto');
led tamanhoSenha=12;

numeroSenha.textConent=tamanhoSenha;
const botoes=document.querySectorAll('parametro__botao');

botoes[0].onclick=diminuiTamanho;
function diminuiTamanho() {
if(tamanhoSenha>1){
    tamanhoSenha=tamanhoSenha-1;
}
    
    numeroSenha.textConent=tamanhoSenha;
}

botoes[1].onclick=aumentaTamanho;
function auementaTamanho() {
if(tamanhoSenha<20){
tamanhoSenha=tamanhoSenha+1;
}
    
    numeroSenha.textConent=tamanhoSenha;
}