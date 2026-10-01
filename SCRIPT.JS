let index = 0;

function mudarSlide(direcao) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slides img').length;

  index = index + direcao;

  if (index >= totalSlides) {
    index = 0; // Volta para a primeira foto se passar da última
  } else if (index < 0) {
    index = totalSlides - 1; // Vai para a última foto se recuar da primeira
  }

  slides.style.transform = `translateX(${-index * 100}%)`;
}