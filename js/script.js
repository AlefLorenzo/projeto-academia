let currentIndex = 0;
const images = document.querySelectorAll('.banner-img');

function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(changeImage, 5000); // Troca de imagem a cada 5 segundos
