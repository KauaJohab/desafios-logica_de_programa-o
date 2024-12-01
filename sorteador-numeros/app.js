function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if(document.getElementById('quantidade').value == '' || document.getElementById('de').value == '' || document.getElementById('ate').value == ''){
        return alert('Os campos devem ser preenchidos');
    }else {
        let sorteados = [];
        let numero;
    
        for(let i = 0; i < quantidade; i++){
    
            numero = obterNumeroAleatorio(de, ate);
            
            while(sorteados[i] == numero){
                numero = obterNumeroAleatorio(de, ate);
            }
    
            sorteados.push(numero);
        }
    
        let numerosSorteados = document.getElementById('resultado');
    
        numerosSorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    
        alterarStatusBotao();
    }

}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let statusBotao = document.getElementById('btn-reiniciar');
    
    if(statusBotao.classList.contains('container__botao-desabilitado')){
        statusBotao.classList.remove('container__botao-desabilitado');
        statusBotao.classList.add('container__botao');
    } else{
        statusBotao.classList.remove('container__botao');
        statusBotao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao()
}