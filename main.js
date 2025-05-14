// criar constante com a chave da API
const key = 'e0283766cee7e7e70be7e75409ae8042'

const inputCidade = document.querySelector(".input-cidade");
const botaoPesquisa = document.querySelector(".btn-pesquisa");

inputCidade.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    botaoPesquisa.click();
  }
});

// Função para capturar o valor do input
function Coletar(){
    let cidade = document.querySelector('.input-cidade').value
    Dados(cidade)
    
}

// Consumindo dados da API OpenWeather
async function Dados(cidade){
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric&lang=pt_br`).then(Response => Response.json())
    console.log(dados)
    
    ExibirDados(dados)
}


function ExibirDados(dados){
    document.querySelector('.cidade').textContent = dados.name
    document.querySelector('.graus').textContent = parseInt(dados.main.temp) + '°C'

    // Exibindo o clima
    let weather = dados.weather[0]
    document.querySelector('.img-previsao').src = `Icons/Icon${weather.icon}.svg`;

    // Exibindo temperatura min e max
    document.querySelector('.grausMin').textContent = parseInt(dados.main.temp_min) + '°C'
    document.querySelector('.grausMax').textContent = parseInt(dados.main.temp_max) + '°C'

    // Exibindo a umidade
    let umidade = document.querySelector('.umidade')
    umidade.textContent = "Umidade Relativa do Ar: " + dados.main.humidity + "%"

    // Vento
    let vento = document.querySelector('.vento')
    vento.textContent = "Velocidade do vento: " + dados.wind.speed + "m/s"
}
