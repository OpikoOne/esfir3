function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter,wrapper, field}) {
  const slider = document.querySelector(container);


  if (!slider) return;

  const slides = document.querySelectorAll(slide);
  const prev = document.querySelector(prevArrow);
  const next = document.querySelector(nextArrow);
  const total = document.querySelector(totalCounter);
  const current = document.querySelector(currentCounter);
  const slidesWrapper = document.querySelector(wrapper);
  const slidesField = document.querySelector(field);
  const width = window.getComputedStyle(slidesWrapper).width;

  let slideIndex = 1;
  let offset = 0;



  if(slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;

  }

  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';
  

  slidesWrapper.style.overflow = 'hidden';

  slides.forEach(slide => slide.style.width = width);

  slider.style.position = 'relative'

  function baseSlide () {
    if (slides.length < 10) {
      return current.textContent =  `0${slideIndex}`;
    }else {
     return current.textContent =  slideIndex;
    } 
  }

  // Навігація слайдерів
  const indicators = document.createElement('ol')
  const dots = [];
  indicators.classList.add('carousel-indicators');

  slider.append(indicators);


  for(let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.classList.add('dot');

    indicators.append(dot);

    if (i == 0) {
      dot.style.opacity = 1;
    }
    dots.push(dot);
  }



  next.addEventListener('click', () => {
    if(offset >= 75) {
      offset = 0;
    }else {
      offset += 25;
    }

    slidesField.style.transform = `translateX(-${offset}%)`;

    if(slideIndex == slides.length) {
      slideIndex = 1
    }else {
      slideIndex++;
    }

    baseSlide();
    
    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;

    
  })

  prev.addEventListener('click', () => {
    if(offset <= 0) {
      offset = 75;
    }else {
      offset -= 25;
    }

    slidesField.style.transform = `translateX(-${offset}%)`;

    if(slideIndex == 1) {
      slideIndex = slides.length
    }else {
      slideIndex--;
    }

    baseSlide();
    
    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;

    
  })

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;
      if(slideTo == 1) {
        offset = 0;
      }else if(slideTo == 2) {
        offset = 25;
      }else if(slideTo == 3) {
        offset = 50;
      }else if(slideTo == 4) {
        offset = 75;
      }
      

      slidesField.style.transform = `translateX(-${offset}%)`;

      baseSlide();
      
      dots.forEach(dot => dot.style.opacity = ".5");
      dots[slideIndex-1].style.opacity = 1;
    })
  })
}

export default slider;