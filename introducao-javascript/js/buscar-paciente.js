var botaoAdicionar = document.querySelector("#buscar-pacientes");


botaoAdicionar.addEventListener("click", function() {
	
	var erroAjax = document.querySelector("#erro-ajax");	
	
	var xhr = new XMLHttpRequest();
	
	var URL = "https://api-pacientes.herokuapp.com/pacients";
	
	xhr.open("GET", URL);
	
		xhr.addEventListener("load", function() {
		
			if(xhr.status = 200) {

				erroAjax.classList.add("invisivel");
				
				var resposta = xhr.responseText;

				console.log(resposta);

				var pacientes = JSON.parse(resposta);

				pacientes.forEach(function(paciente){

					adicionaPacienteNaTabela(paciente);
				});
			} 
			else {
				
				erroAjax.classList.remove("invisivel");
			}
	}); 
	
	xhr.send();
	
});

