const carrossel = document.querySelector('.carrossel');
const btnPrev = document.querySelector('.btn.prev');
const btnNext = document.querySelector('.btn.next');

const scrollAmount = 470;

btnPrev.addEventListener('click', () => {
    carrossel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

btnNext.addEventListener('click', () => {
    carrossel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

function missao() {
    document.getElementById("sobrenos").innerHTML = "<i>missão</i>"
    document.getElementById("paragrafo1").innerText = "Nossa missão é inspirar uma beleza que transcende tendências, cultivando a elegância em cada detalhe da sua jornada de autocuidado. Oferecemos cosméticos de alta performance, formulados com sofisticação e um olhar para a atemporalidade, para realçar sua beleza única com classe e distinção."
    document.getElementById("paragrafo2").innerText = "Acreditamos que a verdadeira beleza reside na confiança e na sutileza. Por isso, nos dedicamos a criar produtos que proporcionam resultados refinados, com texturas luxuosas e embalagens que refletem a sofisticação que buscamos inspirar."
}

function visao() {
    document.getElementById("sobrenos").innerHTML = "<i>visão</i>"
    document.getElementById("paragrafo1").innerText = "Nossa visão é nos consolidarmos como a definição de elegância e sofisticação no universo da beleza. Almejamos ser a referência para aqueles que buscam cosméticos de alta performance que transcendem tendências, oferecendo uma experiência de beleza atemporal e requintada."
    document.getElementById("paragrafo2").innerText = "Visualizamos um futuro onde a beleza é sinônimo de discrição, qualidade excepcional e um toque de exclusividade. Buscamos incessantemente a perfeição em cada detalhe, desde a seleção de ingredientes nobres até o design minimalista e elegante de nossas embalagens, criando produtos que inspiram admiração e confiança."
}

function valores() {
    document.getElementById("sobrenos").innerHTML = "<i>valores</i>"
    document.getElementById("paragrafo1").innerHTML = "Na Make4You, nossa elegância se sustenta em valores essenciais:<b>qualidade</b>superior em cada detalhe, da seleção de ingredientes à alta performance dos produtos; <b>sofisticação atemporal</b>, buscando uma beleza que transcende tendências com design refinado e realce sutil;<b>discrição e sutileza</b>, onde a verdadeira elegância se manifesta."
    document.getElementById("paragrafo2").innerText = "Estes valores formam a essência da nossa marca, guiando cada ação e refletindo nosso compromisso com uma beleza que é sinônimo de elegância, qualidade e profundo respeito por você."
}

const botao = document.getElementById("btnPesquisa");
const input = document.getElementById("campoBusca");

botao.addEventListener("click", () => {
  if (input.style.display === "none" || input.style.display === "") {
    input.style.display = "block";
    input.focus();
  } else {
    input.style.display = "none";
  }
});

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
  
      const termo = input.value.trim().toLowerCase();
  
      if (termo) {
        const elementos = document.querySelectorAll("body *:not(script):not(style)");
  
        for (let el of elementos) {
          if (el.children.length === 0 && el.innerText.toLowerCase().includes(termo)) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
            el.style.backgroundColor = "antiquewhite";
            setTimeout(() => el.style.backgroundColor = "", 2000);
            break;
          }
        }
      }
    }
});