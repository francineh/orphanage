//a gente cria variaveis e costuma colocar palavras chaves na frente dela, 
//fica melhor por que se nao colocarmos em algum momento nossa aplicação vai quebrar.
//e isso acontece por que talvez ele nao vai identificar o por que daquela "variavel"
//essa "CONST" estou falando que a variavel "mymap", ela nao vai ter uma funçãi significativa no meu codigo,
//ela vai ser apenas o mapa e fim( uma função CONSTANTE) 
//const mymap = L.map('mapid').setView([51.505, -0.09 NESTE CASO EU TERRO UM ARREY COM 2 POSIÇOES 0 E 1], 13 zoom do mapa);
// L= é igual a linha 22 do meu html entao ele criou um "objeto chamado L." eu sei que o L é um objetopor que temos um ponto
//ele tem uma funcionalidade porque ('argumentos/estou argumentando com afunção ')abrimos e fechamos parentezes.
// tenho mais coisas nessa função exemplo o .setView([51.505, -0.09], 13); = viw é ver, pode ser que seja um AJUSTE DE VIZUALIZAÇÃO
//([51.505 Latitude, -0.09longetude do mapa],POR CAUSA DESSA VIRGULA EU SEI QUE TEMOS 2 ARGUMENTOS 13); esses argumentos sao do tipo numeros.
//tipos de dados: "string"=texto , Number 02 , object {objeto}, boolean true ou false /verdadeiro ou falso, ARRREY [ela é uma coleção de valores/ exemplo uma lista de compras]  


//A PARTIR DAQUI OS COGIGOS PROPRIAMENTE DITO

const map = L.map('mapid').setView([-29.9139615,-50.5444596], 12)

//analise da segunda linha de codigo 
// ele esta pegando o L esta recebendo tileLayer que é a primeira camada que vai receber nosso mapa
//o restante sao dois argumentos por estao separados por virgula 
//L.tileLayer(
//    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', argumento 1> MAPA GRATUITO
  //   {
  //  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//} ARGUMENTO 2 UMA STRING
//).addTo(map);   estou pegando a tileLayer e adicionando ao mapa da linha de codigo acima

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map)
    //criar um icone// vai ter um objeto do tipo argumento. dentro do argumento vai ter o icone,o tamanho de largura e altura,onde estara ancorado
    //quando abrir o popup ele vai estar ao lado
 const icon = L.icon({
iconUrl: "./public/images/map-marker.svg",
iconSize:[58, 68],
iconAnchor:[29, 68],
popupAnchor:[170, 2],
})

//criando o popup 

const popup = L.popup({
closeButton:false,
className:'map-popup',
minWidth:240,
minHeight:240,

}).setContent('Lar das crianças <a href=" orphaneges.html?id=1" class=" choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>') 

// o L cria uma marcação que é adcionado ao mapa/ bindPopup esta ligando um fio ao outro  .openPopup(); abra o popup
// o ; ponto e virgula que a gente vê no java script é sempre no final de alguma "INSTRUÇÃO" tipo = faça o popup aparecer no mapa
//dica> NO JAVASCRIPT POR MUITAS VEZES VC VAI PODER USAR O PONTO E VIRGULA FACULTATIVO POR ISSO VC PODE IR APAGANDO ELES.
L.marker([-29.9139615,-50.5444596], {icon})
.addTo(map)    
.bindPopup(popup)
