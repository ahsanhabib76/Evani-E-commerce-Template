const testimonialsSlider = () => {
  const testimonials = document.querySelector(".testimonials-carousel");
  const testimonialsSlider = document.querySelector(".testimonials-slider");

  const testimonialsBtns = document.querySelector(".testimonials-btns");
  const btns = Array.from(testimonialsBtns.children);
  const prev = btns[0];
  const next = btns[1];
  let slideIndex = 1;

  // console.log(testimonials.offsetWidth);

  testimonialsSlider.setAttribute("data-transformX", 0);
  prev.setAttribute("disabled", true);
  if (testimonialsSlider.children.length == 1) {
    next.setAttribute("disabled", true);
  }

  let changeSlide = (direction) => {
    let transformX = Number(testimonialsSlider.getAttribute("data-transformX"));

    if (direction === "prev") {
      transformX += testimonialsSlider.offsetWidth;
    } else {
      transformX -= testimonialsSlider.offsetWidth;
    }

    testimonialsSlider.style.transform = `translateX(${transformX}px)`;
    testimonialsSlider.setAttribute("data-transformX", transformX);
  };

  prev.addEventListener("click", () => {
    changeSlide("prev");
    slideIndex--;

    if (slideIndex === 1) {
      prev.setAttribute("disabled", true);
    }

    next.removeAttribute("disabled");
    console.log("prev");
  });

  next.addEventListener("click", () => {
    changeSlide("next");
    slideIndex++;

    if (
      slideIndex === testimonialsSlider.children.length ||
      testimonialsSlider.style.transform === "translateX(-3430px)"
    ) {
      next.setAttribute("disabled", true);
    }

    prev.removeAttribute("disabled");

    console.log("next");
  });
};

// testimonialsSlider();

const testimonialsSlider2 = () => {
  const testimonials = document.querySelector(".testimonials-carousel");
  const testimonialsSlider = document.querySelector(".testimonials-slider");

  const testimonialsBtns = document.querySelector(".testimonials-btns");
  const btns = Array.from(testimonialsBtns.children);
  const prev = btns[0];
  const next = btns[1];
  let slideIndex = 1;
  const container = document.querySelector(".container");

  console.log(container.clientWidth);

  // set width when screen size less than 768 pixels
  const setWidth = () => {
    for (let i = 0; i < testimonialsSlider.children.length; i++) {
      if (window.screen.width < 768) {
        testimonialsSlider.children[i].style.width = `${
          container.clientWidth - 30
        }px`;
        testimonialsSlider.children[i].style.height = "fit-content";
      }
    }
  };

  setWidth();

  // set width when screen size greater than 768 pixels
  const greaterThan768 = () => {
    for (let i = 0; i < testimonialsSlider.children.length; i++) {
      if (window.screen.width >= 768 && window.screen.width < 992) {
        testimonialsSlider.children[i].style.width = `${
          container.clientWidth - 390
        }px`;
        testimonialsSlider.children[i].style.height = "auto-fit";
      }
    }
  };

  greaterThan768();

  const greaterThan992 = () => {
    for (let i = 0; i < testimonialsSlider.children.length; i++) {
      if (window.screen.width >= 992) {
        testimonialsSlider.children[i].style.width = `${
          container.clientWidth - 520
        }px`;
        testimonialsSlider.children[i].style.height = "auto-fit";
      }
    }
  };

  window.addEventListener("resize", () => {
    if (window.screen.width < 768) {
      setWidth();
    } else if (window.screen.width >= 768 && window.screen.width < 992) {
      greaterThan768();
    } else if (window.screen.width >= 992) {
      greaterThan992();
    }
  });

  console.log(testimonialsSlider.children);

  testimonialsSlider.setAttribute("data-transformX", 0);
  prev.setAttribute("disabled", true);
  if (testimonialsSlider.children.length == 1) {
    next.setAttribute("disabled", true);
  }

  let changeSlide = (direction) => {
    let transformX = Number(testimonialsSlider.getAttribute("data-transformX"));

    if (direction === "prev") {
      if (window.screen.width < 768) {
        transformX += testimonialsSlider.children[0].clientWidth + 30;
      } else if (window.screen.width >= 768 && window.screen.width < 1200) {
        transformX += testimonialsSlider.children[0].clientWidth + 30;
      } else if (window.screen.width > 1200) {
        transformX += testimonialsSlider.children[0].clientWidth + 30;
      }
    } else {
      if (window.screen.width < 768) {
        transformX -= testimonialsSlider.children[0].clientWidth + 30;
      } else if (window.screen.width >= 768 && window.screen.width < 1200) {
        transformX -= testimonialsSlider.children[0].clientWidth + 30;
      } else if (window.screen.width >= 1200) {
        transformX -= testimonialsSlider.children[0].clientWidth + 25;
      }
    }

    testimonialsSlider.style.transform = `translateX(${transformX}px)`;
    testimonialsSlider.setAttribute("data-transformX", transformX);
  };

  prev.addEventListener("click", () => {
    changeSlide("prev");
    slideIndex--;

    if (slideIndex === 1) {
      prev.setAttribute("disabled", true);
    }

    next.removeAttribute("disabled");
    console.log("prev");
  });

  next.addEventListener("click", () => {
    changeSlide("next");
    slideIndex++;

    if (
      slideIndex === testimonialsSlider.children.length ||
      testimonialsSlider.style.transform === "translateX(-3430px)"
    ) {
      next.setAttribute("disabled", true);
    }

    prev.removeAttribute("disabled");

    console.log("next");
  });
};

testimonialsSlider2();
