function tocaSom(idTagAudio) {
    const elemento = document.querySelector(idTagAudio);

    if (elemento !== null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('erro de informação');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const tagTecla = tecla.classList[1];
    const idBotao = `#som_${tagTecla}`;

    tecla.onclick = () => tocaSom(idBotao);

    tecla.onkeydown = (evento) => {

        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = (evento) => {

        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.remove('ativa');
        }
    }

}