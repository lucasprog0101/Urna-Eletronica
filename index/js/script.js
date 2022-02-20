/* dados dos candidatos */
let presidenteUm = {
    nome: "julius",
    cargo: "presidente",
    discurso: "Se eu não comprar nada, <br> o desconto é maior.",
    codigo: "345",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREXTvRidWdzJtmibcqy3zY12f0LjE4qcvCQ__l2KmF8C2WQ4jCRaCo1I-VEnSVOzAu2b4&usqp=CAU"
};

let vicePresidenteUm = {
    nome: "senhor madruga",
    cargo: "vice-presidente",
    discurso: "A vingança nunca é plena, <br> mata a alma e envenena.",
    codigo: "678",
    img: "https://infantv.com.br/infantv/wp-content/uploads/2016/08/madruga.jpg"
}

let presidenteDois = {
    nome: "Roberto Nascimento",
    cargo: "presidente",
    discurso: "O sistema entrega a mão <br> para salvar o braço.",
    codigo: "923",
    img: "https://hqscomcafe.com.br/wp-content/uploads/2020/09/Frases-Capitao-Nascimento-800x445.jpg"
}

let vicePresidenteDois = {
    nome: "chaves",
    cargo: "vice-presidente",
    discurso: "Eu prefiro morrer <br> do que perder a vida",
    codigo: "830",
    img: "http://1.bp.blogspot.com/-q-53eCwSXpg/VMfKNaTW4jI/AAAAAAAAFww/eB3wNlccFHQ/s1600/chaves%2Bno%2Btambor.jpg"
}

const codigos = [
    "830",
    "923",
    "678",
    "345"
];

const classNumero = document.querySelector(".numero");
const bntEnviar = document.querySelector(".enviar");
const infoPolitico = document.querySelector("#info_candidatos");
const painel = document.querySelector("#painel");
function sistemaDeVotacao(n) {
    $('.pisca').text(n);
    if (classNumero.classList.contains('pisca')) {
        $('.pisca').removeClass('pisca').next().addClass('pisca');
    } else {
        $('.pisca').removeClass('pisca').next().addClass('pisca');
    }

}

$(".enviar").click(function validacao() {
     const TextoNumero = $(".numero").text();
        switch (TextoNumero) {
            //chaves
            case "830":
             $("#digitos").css('display', 'none');
             infoPolitico.innerHTML = `
               <h3 id="titulo_candidato">informações do candidato</h3>
                <img src="${vicePresidenteDois.img}" alt="${vicePresidenteDois.nome}">
                <div id="quebra_texto">
                    <p class="p">Nome: ${vicePresidenteDois.nome}</p>
                    <p class="p">Cargo: ${vicePresidenteDois.cargo}</p>
                    <p class="p">Discurso: "${vicePresidenteDois.discurso}"</p>
                    <p class="p">Codigo: ${vicePresidenteDois.codigo}</p>
                    </div>
             `;

             const musicUm = new Audio('../audios/chaves.mp3');
             musicUm.play();
             break;

             // capitão nacimento ou tropa de elite
            case "923":
             $("#digitos").css('display', 'none');
             infoPolitico.innerHTML = `
               <h3 id="titulo_candidato">informações do candidato</h3>
                <img src="${presidenteDois.img}" alt="${presidenteDois.nome}">
                <div id="quebra_texto">
                    <p class="p">Nome: ${presidenteDois.nome}</p>
                    <p class="p">Cargo: ${presidenteDois.cargo}</p>
                    <p class="p">Discurso: "${presidenteDois.discurso}"</p>
                    <p class="p">Codigo: ${presidenteDois.codigo}</p>
                    </div>
             `;

             const musicDois = new Audio('../audios/tropa_de_elite.mp3');
             musicDois.play();
             break;
            
             // senhor madrugra
            case "678":
                $("#digitos").css('display', 'none');
                infoPolitico.innerHTML = `
               <h3 id="titulo_candidato">informações do candidato</h3>
                <img src="${vicePresidenteUm.img}" alt="${vicePresidenteUm.nome}">
                <div id="quebra_texto">
                    <p class="p">Nome: ${vicePresidenteUm.nome}</p>
                    <p class="p">Cargo: ${vicePresidenteUm.cargo}</p>
                    <p class="p">Discurso: "${vicePresidenteUm.discurso}"</p>
                    <p class="p">Codigo: ${vicePresidenteUm.codigo}</p>
                    </div>
             `;

                const musicTreis = new Audio('../audios/senhor_madruga.mp3');
             musicTreis.play();
             break;
      
             //julios
            case "345":
                $("#digitos").css('display', 'none');
                infoPolitico.innerHTML = `
               <h3 id="titulo_candidato">informações do candidato</h3>
                <img src="${presidenteUm.img}" alt="${presidenteUm.nome}">
                <div id="quebra_texto">
                    <p class="p">Nome: ${presidenteUm.nome}</p>
                    <p class="p">Cargo: ${presidenteUm.cargo}</p>
                    <p class="p">Discurso: "${presidenteUm.discurso}"</p>
                    <p class="p">Codigo: ${presidenteUm.codigo}</p>
                    </div>
             `;

                const musicQuatro = new Audio('../audios/julios.mp3');
                musicQuatro.play();
                break;
        }
});

$(".branco").click(function () { 
    $("#digitos").css('display', 'none');
    painel.innerHTML = `
     <h3 class="nulo">o seu voto foi nulo</h3>
    `;    
});

$(".corrigir").click(function () { 
    $(".numero").text('');
    $('.numero').removeClass('pisca');
    $('.inicio').addClass('pisca');
});