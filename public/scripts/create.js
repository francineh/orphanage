 
//todos os objetos precisam de propriedade e valor, e o obejetivo dessa constante é tirar o zoom e etc, ou seja vamos desabilitaras funções.

const options ={
    dragging:false,
    TouchZoom:false,
    doubleClickZoom:false,
    scrollwheelZoom:false,
    zoomControl:false,
    }
    
    //esses foram os objetos e valores criados, agora é necessario criar uma função para receber esses objetos e valores.
    // no caso const map = L.map('mapid',options ).setView([-29.9139615,-50.5444596], 12) recebeu os objetos e valores criados acima
    
    //fazer o mapa
    
    const map = L.map('mapid',options ).setView([-29.9139615,-50.5444596], 12)
    
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
    
        
        // o L cria uma marcação que é adcionado ao mapa/ bindPopup esta ligando um fio ao outro  .openPopup(); abra o popup
        // o ; ponto e virgula que a gente vê no java script é sempre no final de alguma "INSTRUÇÃO" tipo = faça o popup aparecer no mapa
        //dica> NO JAVASCRIPT POR MUITAS VEZES VC VAI PODER USAR O PONTO E VIRGULA FACULTATIVO POR ISSO VC PODE IR APAGANDO ELES.
        L.marker([-29.9139615,-50.5444596], {icon})
        .addTo(map)    
    
        // vamos criar uma função chamada "GALERIA DE IMAGENS"
    //event.currentTarget> ele sera o meu botao,quem é que esta disparando? o Target significa "alvo atual", que é o botao, por isso quando eu quiser usar o meu botao o certo é criar uma variavel.  
    
    //passo a passo da logica a seguir 
    
           //passo a passo remover todas as classes "active", por que? ele vai olhar todos os botoes e remover a classe active.
            //selecionar a imagem clicada.
            //atualizar o container de images
            // adicionar a classe active para o botão que foi clicado
    
        function selectimage(event){
            const button = event.currentTarget
            // passo 1 visitar todos os botoes e remover a classe active. para isso criaremos uma variavel
            const buttons = document.querySelectorAll(".imagens button")  
             //esta função vai remover a classe active do meu botao, cada botao tem uma classList, que vai remover alguma coisa: no casso nossa classe active
            buttons.forEach(removeActiveClasse)
       
            function removeActiveClasse(button){
            button.classList.remove("active");
            }
            //aqui nos vamos add a class active to
             button.classList.add("active");
            //selecionar uma imagem, e toda vez que eu clicar no botao muda a imagem pricipal do site.
            // children= a filhos
            const image = button.children[0]
            const imageContainer = document.querySelector(".orphanage-details > img")
            //atualizar o container de IMAGENS
            imageContainer.src = image.src
            }