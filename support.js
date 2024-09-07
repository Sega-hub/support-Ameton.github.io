document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.questions__slides');
    const slideCount = document.querySelectorAll('.questions__slide').length;
    let currentIndex = 0;
  
    document.querySelector('.questions__next').addEventListener('click', () => {
      if (currentIndex < slideCount - 1) {
        currentIndex++;
        updateSlider();
      }
    });
  
    document.querySelector('.questions__prev').addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });
  
    function updateSlider() {   

      slides.style.transform = `translateX(-${currentIndex * 282}px)`;

      switch (currentIndex) {
        case 0:
            document.querySelector('.questions__prev').style.display = "none";
            break;
        case 7:
            slides.style.transform = `translateX(-${currentIndex * 0}%)`;
            document.querySelector('.questions__prev').style.display = "none";
            currentIndex = 0;
            break;
        case 1:
            document.querySelector('.questions__prev').style.display = "flex";
            break;    
        }
    }
  });