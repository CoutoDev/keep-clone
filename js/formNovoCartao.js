;(function() {
    const $formNovoCartao = document.querySelector('.formNovoCartao');

    $formNovoCartao.addEventListener('submit', function(infosDoEvento) {
        infosDoEvento.preventDefault();


        const $formNovoCartaoConteudo = document.querySelector('.formNovoCartao-conteudo');
        const conteudo = $formNovoCartaoConteudo.value;
        const hasConteudo = Boolean(conteudo);
        const $htmlDoCartao =  criarHTMLDoCartao(conteudo);
        if(hasConteudo){
            const $mural = document.querySelector('.mural');
            
            $mural.insertAdjacentHTML('afterbegin', $htmlDoCartao );
            $formNovoCartaoConteudo.value = "";



        } else {
            const $msgErro =  document.createElement('div');
            $msgErro.classList.add('formNovoCartao-msg');

            $msgErro.textContent = "Erro ao salvar. Não digite varios nada!"

            $formNovoCartao.insertAdjacentElement('beforeend', $msgErro);

            $msgErro.addEventListener('animationend', function(){
                $msgErro.remove();
            });

        }

    });

    console.log($formNovoCartao);

    $formNovoCartao.classList.remove('no-js');
})()