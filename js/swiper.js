const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollBar = document.querySelector(".containerPosts .slider-scrollbar");
  const ScrollBarThumb = document.querySelector(".containerPosts .scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  ScrollBarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPostion = ScrollBarThumb.offsetLeft;

    //Update thumb postion on mouse move
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPostion = thumbPostion + deltaX;

      const maxThumbPostion = sliderScrollBar.getBoundingClientRect().width - ScrollBarThumb.offsetWidth;

      const boundedPostion = Math.max(0, Math.min(maxThumbPostion, newThumbPostion));
      const scrollPostion = (boundedPostion / maxThumbPostion) * maxScrollLeft;

      ScrollBarThumb.style.left = `${boundedPostion}px`;
      imageList.scrollLeft = scrollPostion;
    }

    const handleMouseUp = () => {

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

    }

    //add event listeners for drag interaction
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

  });

  slideButtons.forEach(button => {
    button.addEventListener('click', () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" })
    });
  });
  const handleSlideButtons = () => {
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  };
  //update scrollbar thumb postion based on image scroll 
  const updateScrollThumbPostion = () => {
    const scrollPostion = imageList.scrollLeft;
    const thumbPostion = (scrollPostion / maxScrollLeft) * (sliderScrollBar.clientWidth - ScrollBarThumb.offsetWidth);
    ScrollBarThumb.style.left = `${thumbPostion}px`;
  }

  imageList.addEventListener('scroll', () => {
    handleSlideButtons();
    updateScrollThumbPostion();
  })
}

window.addEventListener('load', initSlider);
