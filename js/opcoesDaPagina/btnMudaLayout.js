// Clicar no botão e alterar texto e css

const btnMudaLayout = document.querySelector('#btnMudaLayout');
const muralContainer = document.querySelector('.container.mural');

function mudaTexto() {
    if(btnMudaLayout.textContent.trim() === 'Linhas'){
        btnMudaLayout.textContent = "Colunas";
    } else {
        btnMudaLayout.textContent = "Linhas";
    }
}

function mudaLayout() {
    muralContainer.classList.toggle('mural--linha');
}

// callback
btnMudaLayout.addEventListener('click',mudaTexto);
btnMudaLayout.addEventListener('click',mudaLayout);