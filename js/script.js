//seleciona o formulário
const form = document.querySelector('.form');

//seleciona a div de resultado
const resultado = document.querySelector('.resultado')


function calcularIMC (e){
  e.preventDefault();
  //seleciona os elementos peso e altura
  const inputPeso = form.querySelector('.peso');
  const inputAltura = form.querySelector('.altura');

  //recupera os valores digitados e calcula o IMC
  const peso = Number(inputPeso.value);
  const altura  = Number(inputAltura.value/100)
  const imc = peso/altura**2

  //verifica o nivel IMC
  
  let resposta = '';
  if (imc >= 39.9) {
    resposta = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3).`
  }else if (imc >= 34.9){
    resposta = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2).`
  }else if (imc >= 29.9){
    resposta = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1).`
  }else if (imc >= 24.9) {
    resposta = `Seu IMC é ${imc.toFixed(2)} (Sobrepeso).`
  }else if (imc >= 18.5) {
    resposta = `Seu IMC é ${imc.toFixed(2)} (Peso normal).`
  }else if (imc < 18.5) {
    resposta = `Seu IMC é ${imc.toFixed(2)} (Abaixo do peso).`
  }else{
    resposta = 'Verifique os dados digitados'
  }

  //altera background da resposta 
  //verde para calculado com sucesso e vermelho para dados incorretos
   let bgClass= ''
   if(imc){
     bgClass='bg-primary'
   }else{
     bgClass='bg-danger'
   }
 
  
  //insere o paragrafo com a resposta
  resultado.innerHTML=`<p class="pl-2 ${bgClass}">${resposta}</p>`

  //limpa o formulário
  inputPeso.value = "";
  inputAltura.value ="";

}

form.addEventListener('submit', calcularIMC)