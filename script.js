 console.log("JS dosyasından çalışıyor");

 // Slider JS
    const sliderWrapper = document.getElementById('sliderWrapper');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('dotsContainer');
    const totalSlides = 6;
    let currentIndex = 0;
    let interval;

    for(let i=0; i<totalSlides; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if(i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        goToSlide(i);
        resetInterval();
      });
      dotsContainer.appendChild(dot);
    }
    const dots = document.querySelectorAll('.dot');

    function updateSlider() {
      sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
    }

    function goToSlide(index) {
      currentIndex = index;
      updateSlider();
    }

    function resetInterval() {
      clearInterval(interval);
      interval = setInterval(nextSlide, 5000);
    }

    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });

    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });

    interval = setInterval(nextSlide, 3000);

    // Reklam kodlarını buraya ekleyebilirsin
