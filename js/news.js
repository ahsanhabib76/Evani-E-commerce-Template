const newsPagination = (traget) => {
  const carouselOuter = document.querySelector(traget);
  const carouselInner = carouselOuter.querySelector(".news-inner");
  const sliderItem = carouselInner.querySelector(".slider-items");
  const pagination = carouselInner.querySelector(".pagination");

  const container = document.querySelector(".container");

  sliderItem.setAttribute(`data-transformX`, 0);
  let transformX = Number(sliderItem.getAttribute(`data-transformX`));

  // Set width when screen size less 567 pixels and screen resize
  const lessThan567 = () => {
    for (let i = 0; i < sliderItem.children.length; i++) {
      sliderItem.children[i].style.width = `${container.clientWidth - 32}px`;
      sliderItem.children[i].style.heigth = `fit-content`;
    }
  };

  // set width when screen size greater than 567 pixels and screen resize
  const greaterThan567 = () => {
    if (window.screen.width >= 567 && window.screen.width < 768) {
      for (let i = 0; i < sliderItem.children.length; i++) {
        sliderItem.children[i].style.width = `${
          container.clientWidth - 302.5
        }px`;
        sliderItem.children[i].style.heigth = `fit-content`;
      }

      pagination.children[5].style.display = "none";
    } else if (window.screen.width >= 768 && window.screen.width < 992) {
      for (let i = 0; i < sliderItem.children.length; i++) {
        sliderItem.children[i].style.width = `${container.clientWidth - 390}px`;
        sliderItem.children[i].style.heigth = `fit-content`;
      }
    } else if (window.screen.width >= 992 && window.screen.width < 1200) {
      for (let i = 0; i < sliderItem.children.length; i++) {
        sliderItem.children[i].style.width = `${container.clientWidth - 674}px`;
        sliderItem.children[i].style.heigth = `fit-content`;
      }

      pagination.children[4].style.display = "none";
    } else if (window.screen.width >= 1200) {
      for (let i = 0; i < sliderItem.children.length; i++) {
        sliderItem.children[i].style.width = `${container.clientWidth - 792}px`;
        sliderItem.children[i].style.heigth = `fit-content`;
      }

      pagination.children[4].style.display = "none";
    }
  };

  // Set width for all screen
  if (window.screen.width <= 566) {
    for (let i = 0; i < sliderItem.children.length; i++) {
      sliderItem.children[i].style.width = `${container.clientWidth - 32}px`;
      sliderItem.children[i].style.heigth = `fit-content`;
    }
  } else if (window.screen.width >= 567 && window.screen.width < 768) {
    for (let i = 0; i < sliderItem.children.length; i++) {
      sliderItem.children[i].style.width = `${container.clientWidth - 302.5}px`;
      sliderItem.children[i].style.heigth = `fit-content`;
    }

    pagination.children[5].style.display = "none";
  } else if (window.screen.width >= 768 && window.screen.width < 992) {
    for (let i = 0; i < sliderItem.children.length; i++) {
      sliderItem.children[i].style.width = `${container.clientWidth - 390}px`;
      sliderItem.children[i].style.heigth = `fit-content`;
    }
  } else if (window.screen.width >= 992 && window.screen.width < 1200) {
    for (let i = 0; i < sliderItem.children.length; i++) {
      sliderItem.children[i].style.width = `${container.clientWidth - 674}px`;
      sliderItem.children[i].style.heigth = `fit-content`;
    }

    pagination.children[4].style.display = "none";
  } else if (window.screen.width >= 1200) {
    for (let i = 0; i < sliderItem.children.length; i++) {
      sliderItem.children[i].style.width = `${container.clientWidth - 792}px`;
      sliderItem.children[i].style.heigth = `fit-content`;
    }

    pagination.children[4].style.display = "none";
  }

  // Window resize event
  window.addEventListener("resize", () => {
    if (window.screen.width <= 566) {
      lessThan567();
    } else if (window.screen.width >= 567) {
      greaterThan567();
    } else {
      return null;
    }
  });

  // Slide Function
  const slide = () => {
    pagination.children[0].addEventListener("click", () => {
      pagination.children[0].classList.add("pagination-active");
      pagination.children[1].classList.remove("pagination-active");
      pagination.children[2].classList.remove("pagination-active");
      pagination.children[3].classList.remove("pagination-active");
      pagination.children[4].classList.remove("pagination-active");
      pagination.children[5].classList.remove("pagination-active");

      transformX = 0;
      sliderItem.style.transform = `translateX(-${transformX}px)`;
      sliderItem.setAttribute("data-transformX", transformX);
    });

    pagination.children[1].addEventListener("click", () => {
      pagination.children[0].classList.remove("pagination-active");
      pagination.children[1].classList.add("pagination-active");
      pagination.children[2].classList.remove("pagination-active");
      pagination.children[3].classList.remove("pagination-active");
      pagination.children[4].classList.remove("pagination-active");
      pagination.children[5].classList.remove("pagination-active");

      if (window.screen.width < 460) {
        transformX = sliderItem.children[1].clientWidth + 29;
      } else if (window.screen.width >= 460 && window.screen.width <= 566) {
        transformX = sliderItem.children[1].clientWidth + 28;
      } else if (window.screen.width >= 567 && window.screen.width < 768) {
        transformX = sliderItem.children[1].clientWidth + 27;
      } else if (window.screen.width >= 768 && window.screen.width < 992) {
        transformX = sliderItem.children[1].clientWidth + 31;
      } else if (window.screen.width >= 992 && window.screen.width < 1200) {
        transformX = sliderItem.children[1].clientWidth + 26;
      } else if (window.screen.width >= 1200) {
        transformX = sliderItem.children[1].clientWidth + 30;
      }

      sliderItem.style.transform = `translateX(-${transformX}px)`;
      sliderItem.setAttribute("data-transformX", transformX);
    });

    console.log(sliderItem.children[1].clientWidth);

    pagination.children[2].addEventListener("click", () => {
      pagination.children[0].classList.remove("pagination-active");
      pagination.children[1].classList.remove("pagination-active");
      pagination.children[2].classList.add("pagination-active");
      pagination.children[3].classList.remove("pagination-active");
      pagination.children[4].classList.remove("pagination-active");
      pagination.children[5].classList.remove("pagination-active");

      if (window.screen.width <= 566) {
        transformX = sliderItem.children[2].clientWidth * 2 + 59;
      } else if (window.screen.width >= 567 && window.screen.width < 768) {
        transformX = sliderItem.children[2].clientWidth * 2 + 54;
      } else if (window.screen.width >= 768 && window.screen.width < 992) {
        transformX = sliderItem.children[2].clientWidth * 2 + 58;
      } else if (window.screen.width >= 992 && window.screen.width < 1200) {
        transformX = sliderItem.children[2].clientWidth * 2 + 53;
      } else if (window.screen.width >= 1200) {
        transformX = sliderItem.children[2].clientWidth * 2 + 57;
      }

      sliderItem.style.transform = `translateX(-${transformX}px)`;
      sliderItem.setAttribute("data-transformX", transformX);
    });

    pagination.children[3].addEventListener("click", () => {
      pagination.children[0].classList.remove("pagination-active");
      pagination.children[1].classList.remove("pagination-active");
      pagination.children[2].classList.remove("pagination-active");
      pagination.children[3].classList.add("pagination-active");
      pagination.children[4].classList.remove("pagination-active");
      pagination.children[5].classList.remove("pagination-active");

      if (window.screen.width <= 566) {
        transformX = sliderItem.children[3].clientWidth * 3 + 89;
      } else if (window.screen.width >= 567 && window.screen.width < 768) {
        transformX = sliderItem.children[2].clientWidth * 3 + 88;
      } else if (window.screen.width >= 768 && window.screen.width < 992) {
        transformX = sliderItem.children[2].clientWidth * 3 + 90;
      } else if (window.screen.width >= 992 && window.screen.width < 1200) {
        transformX = sliderItem.children[2].clientWidth * 3 + 85;
      } else if (window.screen.width >= 1200) {
        transformX = sliderItem.children[2].clientWidth * 3 + 87;
      }

      sliderItem.style.transform = `translateX(-${transformX}px)`;
      sliderItem.setAttribute("data-transformX", transformX);
    });

    pagination.children[4].addEventListener("click", () => {
      pagination.children[0].classList.remove("pagination-active");
      pagination.children[1].classList.remove("pagination-active");
      pagination.children[2].classList.remove("pagination-active");
      pagination.children[3].classList.remove("pagination-active");
      pagination.children[4].classList.add("pagination-active");
      pagination.children[5].classList.remove("pagination-active");

      if (window.screen.width <= 566) {
        transformX = sliderItem.children[4].clientWidth * 4 + 119;
      } else if (window.screen.width >= 567 && window.screen.width < 768) {
        transformX = sliderItem.children[2].clientWidth * 4 + 118;
      } else if (window.screen.width >= 768 && window.screen.width < 992) {
        transformX = sliderItem.children[2].clientWidth * 4 + 120;
      }

      sliderItem.style.transform = `translateX(-${transformX}px)`;
      sliderItem.setAttribute("data-transformX", transformX);
    });

    pagination.children[5].addEventListener("click", () => {
      pagination.children[0].classList.remove("pagination-active");
      pagination.children[1].classList.remove("pagination-active");
      pagination.children[2].classList.remove("pagination-active");
      pagination.children[3].classList.remove("pagination-active");
      pagination.children[4].classList.remove("pagination-active");
      pagination.children[5].classList.add("pagination-active");

      transformX = sliderItem.children[5].clientWidth * 5 + 148;

      sliderItem.style.transform = `translateX(-${transformX}px)`;
      sliderItem.setAttribute("data-transformX", transformX);
    });
  };

  slide();
};

newsPagination(".news-slider");
