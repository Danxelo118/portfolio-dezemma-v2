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


          /*<!-- Skills Section -->
     <section id="skills" class="skills section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Compétences</h2>
        <div><span>Mes</span> <span class="description-title">compétences en programmation</span></div>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row skills-content skills-animation">

          <div class="col-lg-6">

            <div class="progress">
              <span class="skill"><span>HTML</span></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" color="black" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>CSS</span></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" color="black" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>JavaScript</span></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" color="black" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div><!-- End Skills Item -->

          </div>

          <div class="col-lg-6">

            <div class="progress">
              <span class="skill"><span>C++</span></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" color="black" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>SQL</span></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" color="black" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>PHP</span></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" color="black" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div><!-- End Skills Item -->

          </div>

        </div>

      </div>

    </section><!-- /Skills Section -->*/