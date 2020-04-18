// IIFE
// Module Pattern
;(function(){
    const botoesRemoverCartao = document.querySelectorAll('.opcoesDoCartao-remove')
    
    
    botoesRemoverCartao.forEach((el, i)=>{
        el.addEventListener('click', function(ev){
            let cartao = el.parentNode.parentNode
    
            cartao.classList.add('cartao--some');
    
            cartao.addEventListener('transitionend', function(){
                cartao.remove();
            });
        }); 
    });

})();