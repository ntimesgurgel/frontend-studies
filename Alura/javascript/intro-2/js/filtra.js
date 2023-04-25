var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    textoFiltro = this.value;
    var pacientes = document.querySelectorAll(".paciente");
    pacientes.forEach(function(paciente){
        if(textoFiltro.length > 0){
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(textoFiltro, "i");
            if (!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        } else {
            paciente.classList.remove("invisivel");
        }
    });
});