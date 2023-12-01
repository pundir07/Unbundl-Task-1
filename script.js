let currentSlide = 0;

    function showSlide() {
        const track = document.querySelector('.carousel-track');
        const slides = document.querySelectorAll('.carousel-slide');
        const slideWidth = slides[0].clientWidth;

        track.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
    }

    function nextSlide() {
        const slides = document.querySelectorAll('.carousel-slide');
        if (currentSlide < slides.length - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        showSlide();
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            const slides = document.querySelectorAll('.carousel-slide');
            currentSlide = slides.length - 1;
        }
        showSlide();
    }

    // Automatic rotation (adjust the interval as needed)
    setInterval(nextSlide, 5000); // Rotate every 5 seconds

    // Initial setup
    showSlide();