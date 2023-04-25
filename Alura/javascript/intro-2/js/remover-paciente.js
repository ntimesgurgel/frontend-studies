var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick",function(event){
    var alvoEvento = event.target;
    var alvoRemove = alvoEvento.parentNode;
    alvoRemove.classList.add("fadeOut");
    setTimeout(function(){
        alvoRemove.remove();
    }, 500);
});