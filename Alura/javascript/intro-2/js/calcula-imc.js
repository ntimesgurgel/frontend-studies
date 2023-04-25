var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++){
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    var imc = pacientes[i].querySelector(".info-imc");
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido){
        console.log("Peso inválido");
        imc.textContent = "Peso inválido";
        pacientes[i].classList.add('paciente-invalido');
    }
    
    if (!alturaEhValida){
        console.log("Altura inválida");
        imc.textContent = "Altura inválida";
        pacientes[i].classList.add('paciente-invalido');
    }
    
    if (alturaEhValida && pesoEhValido){
        imc.textContent = calculaImc(peso, altura);
    }
}



function validaPeso(peso){
    if (peso > 0 && peso < 595 && peso.length != 0){
        return true;
    } else {
        return false;
    }
}



function validaAltura(altura){
    if (altura > 0 && altura < 2.52 && altura.length != 0){
        return true;
    } else {
        return false;
    }
}



function calculaImc(peso, altura){
    let imc;
    imc = (peso / (altura**2)).toFixed(2);
    return imc;
}