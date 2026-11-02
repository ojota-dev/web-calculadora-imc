const pesoBt = document.getElementById("peso");
const alturaBt = document.getElementById("altura");
const confirmarBt = document.getElementById("bt-confirmar");
let resultadoImcText = document.getElementById("resultado-imc");
let conclusao = document.getElementById("conclusao");


confirmarBt.addEventListener("click", function confirmarInformacoes() {
	if (pesoBt.value !== "" && alturaBt !== "") {
		if (!isNaN(pesoBt.value) && !isNaN(alturaBt.value)) {
			let resultadoImc = pesoBt.value / (alturaBt.value * alturaBt.value);
			resultadoImcText.innerText=`${resultadoImc.toFixed(2)}`;
			mostrarResultado(resultadoImc);
		} else {
			window.alert("[ERRO] Você informou dados inválidos! Digite apenas valores numéricos");
		}
	} else {
		window.alert("[ERRO] Você não informou nada! Tente novamente")
	}
})

function mostrarResultado(resultadoImc) {
	if (resultadoImc < 18.5) {
		conclusao.innerText="Abaixo do Peso";
		conclusao.className = "abaixo-do-peso";
	} else if (resultadoImc >= 18,5 && resultadoImc <= 24.9) {
		conclusao.innerText="Peso Normal (Eutrófico)";
		conclusao.className = "peso-normal";
	} else if (resultadoImc >= 25.0 && resultadoImc <= 29.9) {
		conclusao.innerText="Sobrepeso";
		conclusao.className = "sobrepeso"
	} else if (resultadoImc >= 30.0 && resultadoImc <= 34.9) {
		conclusao.innerText="Obesidade Grau I";
		conclusao.className = "obesidade-grau1";
	} else if (resultadoImc >= 35.0 && resultadoImc <= 39.9) {
		conclusao.innerText="Obesidade Grau II";
		conclusao.className = "obesidade-grau2";
	} else {
		conclusao.innerText="Obesidade Grau III";
		conclusao.className = "obesidade-grau3";
	}
}
