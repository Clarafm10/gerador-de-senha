const numeroSenha=document.querySector('.parametro-__texto');
led tamanhoSenha=12;

numeroSenha.textConent=tamanhoSenha;
const botoes=document.querySectorAll('parametro__botao');

botoes[0].onclick=diminuiTamanho;
botoes[1].onclick=aumentaTamanho;

function diminuiTamanho() {
if(tamanhoSenha>1){
    //tamanhoSenha=tamanhoSenha-1;
    tamanhoSenha--;
}
    
    numeroSenha.textConent=tamanhoSenha;
}


function auementaTamanho() {
if(tamanhoSenha<20){
//tamanhoSenha=tamanhoSenha+1;
tamanhoSenha++;
}
    
    numeroSenha.textConent=tamanhoSenha;
}
const campoSenha=document.querySectorAll(#campo-senha);
const letrasMaiusculas='ABCDEFG';
geraSenha();
function geraSenha(){

for( let i = 0;i < tamanhoSenha; i++){
    
let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio=Math.floor(numeroAleatorio);
    console.log(letrasMaiusculas[numeroAleatorio]);
}

    
}