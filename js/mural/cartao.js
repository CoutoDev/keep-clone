;
(function () {

    const cartoes = document.querySelectorAll('.cartao');
    console.log(cartoes);

    for (const cartao of cartoes) {
        const label = cartao.querySelector('label.opcoesDoCartao-tipo');
        // const colorToApply = document.querySelector('#' + label.getAttribute('for')).value;
        
        cartao.addEventListener('focusin', function focusIn() {
            cartao.classList.add('cartao--focado');
        });

        cartao.addEventListener('focusout', function focusOut() {
            cartao.classList.remove('cartao--focado');
        });

        // como mudar o fundo do cart
        // cartao.addEventListener('click', (infoDoEvento) =>{
        //     const alvoDoEvento = infoDoEvento.target;
        //     const colorToApply = alvoDoEvento.value;
        //     if(colorToApply){
        //         console.log(colorToApply);
        //         cartao.style.background = `${colorToApply}`;
        //     }

        // });

        cartao.addEventListener("change", function mudaCor(event) {
            const elementoSelecionado = event.target
            const isRadioTipo = elementoSelecionado.classList.contains('opcoesDoCartao-radioTipo')
            if (isRadioTipo) {
                cartao.style.backgroundColor = elementoSelecionado.value
            }
        })

        cartao.addEventListener('click', function removeCartao(event){
            const elementoSelecionado = event.target
            const isRemoveButton = elementoSelecionado.classList.contains('opcoesDoCartao-remove');
            if(isRemoveButton){
                cartao.classList.add('cartao--some');
                cartao.addEventListener('transitionend', function(){
                    cartao.remove();
                });
            }
        });

        cartao.addEventListener('keyup', function selecionaComEnter(event){
            const elementoAlvo = event.target;
            const keyPressed = event.keyCode;
            const isEnterPressed = keyPressed === 13;
            const isWhiteSpacePressed = keyPressed === 32;
            if( isEnterPressed|| isWhiteSpacePressed){
                elementoAlvo.click();
            }

        });
    }

})();