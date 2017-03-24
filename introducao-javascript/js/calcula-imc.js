var pacientes = document.querySelectorAll(".paciente");

for(var i = 0 ; i < pacientes.length ; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if(peso <= 0 || peso >= 1000) {
      pesoEhValido = false;
      tdImc.textContent = "Peso Invalifo";
      paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.00){
      alturaEhValida = false;
      tdAltura.textContent = "Altura Invalida";
      paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida) {
      var imc = peso / (altura * altura);
      tdImc.textContent = imc.toFixed(2);
    }

}