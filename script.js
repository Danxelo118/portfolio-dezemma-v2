let currentIndex = 0;

function showSlide(index) {
  const carouselContainer = document.querySelector('.carousel-container');
  const slideWidth = document.querySelector('.carousel-item').offsetWidth;
  carouselContainer.style.transform = `translateX(${-index * slideWidth}px)`;
  currentIndex = index;
}

function nextSlide() {
  const totalSlides = document.querySelectorAll('.carousel-item').length;
  if (currentIndex < totalSlides - 1) {
    showSlide(currentIndex + 1);
  } else {
    showSlide(0);
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    showSlide(currentIndex - 1);
  } else {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    showSlide(totalSlides - 1);
  }
}

function toggleLanguage() {
    var button = document.getElementById('language-switch');
    if (button.innerHTML === 'EN') {
        button.innerHTML = 'FR';
    } else {
        button.innerHTML = 'EN';
       
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel-container');
    let currentIndex = 0;

    function showNextSlide() {
      currentIndex = (currentIndex + 1) % carouselContainer.children.length;
      updateCarousel();
    }

    function updateCarousel() {
      const translateValue = -currentIndex * 100 + '%';
      carouselContainer.style.transform = 'translateX(' + translateValue + ')';
    }

    // Automatically move to the next slide every 3 seconds (adjust as needed)
    setInterval(showNextSlide, 3000);
  });




  /*<li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>*/