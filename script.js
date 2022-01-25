let totalSlides = document.querySelectorAll(".slider-item").length;
// Para as imagens aparecerem uma a uma, sem descartar nenhuma
document.querySelector(
  ".slider-width"
).style.width = `calc(100vw * ${totalSlides})`;

// Para centralizar os botoes
document.querySelector(".slider-controls").style.height = `${
  document.querySelector(".slider").clientHeight
}px`;

// Para fazer o click de passar as fotos:
let currentSlide = 0; // comeca sempre no slide 0

function goBack() {
  currentSlide--;
  // 👇🏻 e se ja estiver no primeiro e andar para tras? tem de voltar para o ultimo:
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateMargin();
}
function goNext() {
  currentSlide++;
  // e se estiver no ultimo e clicar em proximo? tem de ir para o primeiro:
  if (currentSlide > totalSlides - 1) {
    currentSlide = 0;
  }
  updateMargin();
}
// Funcao que vai colocar uma margin-left sempre negativa, à medida que o scroll acontece
// porque no fundo as imagens ja la estao, mas nao estao dentro do clientwidth
function updateMargin() {
  let sliderWidth = document.querySelector(".slider-item").clientWidth;
  let newMargin = currentSlide * sliderWidth;
  document.querySelector(".slider-width").style.marginLeft = `-${newMargin}px`;
}

// CASO queira fazer a troca de imagens automaticamente (sem carregar nos botoes), cria-se um timer:
// setInterval(goNext, 2000); // carrega em goNext, a cada 2segundos, com uma transicao de 0.3s
