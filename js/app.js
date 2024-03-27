// Header Menu
const showMenuBar = () => {
  const menuBar = document.querySelector(".mobile-menu-trigger");
  const navMenu = document.querySelector(".nav-menu");
  const menuOverlay = document.querySelector(".menu-overlay");
  const closeMenu = document.querySelector(".mobile-menu-close");

  // Show MenuBar when user clicks
  menuBar.addEventListener("click", () => {
    menuOverlay.classList.add("active");
    navMenu.style.transform = `translate(0%)`;
  });

  // close MenuBar when user clicks
  closeMenu.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
    navMenu.style.transform = `translate(-100%)`;
  });

  // Initial Menu items
  const menuItems = document.querySelector(".menu-item");
  const currentTitle = document.querySelector(".current-menu-title");
  const goBack = document.querySelector(".go-back");
  const menuItem = Array.from(menuItems.children);
  const angelLeft = document.querySelector("#angel-left");

  const visible = (element) => {
    element.style.visibility = "visible";
    element.style.opacity = "1";
  };

  const hidden = (element) => {
    element.style.visibility = "hidden";
    element.style.opacity = "0";
  };

  const displayBlock = (element) => {
    element.style.display = "block";
  };

  console.log(menuItem[0].children[0]);

  const hideSubMenu = () => {
    hidden(goBack);

    hidden(menuItem[0].children[1]);
    hidden(menuItem[1].children[1]);
    hidden(menuItem[2].children[1]);
    hidden(menuItem[3].children[1]);
    // hidden(menuItem[4].children[1]);

    menuItem[0].children[0].style.display = "block";
    menuItem[1].children[0].style.display = "block";
    menuItem[2].children[0].style.display = "block";
    menuItem[3].children[0].style.display = "block";
    menuItem[4].children[0].style.display = "block";
  };

  goBack.addEventListener("click", hideSubMenu);

  menuItem[0].addEventListener("click", () => {
    visible(goBack);
    currentTitle.innerHTML = "Home";
    menuItem[0].children[0].style.display = "none";
    menuItem[1].children[0].style.display = "none";
    menuItem[2].children[0].style.display = "none";
    menuItem[3].children[0].style.display = "none";
    menuItem[4].children[0].style.display = "none";
    visible(menuItem[0].children[1]);
  });

  console.log(menuItem[1].children[1]);

  menuItem[1].addEventListener("click", () => {
    visible(goBack);
    currentTitle.innerHTML = "Shop";
    menuItem[0].children[0].style.display = "none";
    menuItem[1].children[0].style.display = "none";
    menuItem[2].children[0].style.display = "none";
    menuItem[3].children[0].style.display = "none";
    menuItem[4].children[0].style.display = "none";
    visible(menuItem[1].children[1]);
  });

  menuItem[2].addEventListener("click", () => {
    visible(goBack);
    currentTitle.innerHTML = "collections";
    menuItem[0].children[0].style.display = "none";
    menuItem[1].children[0].style.display = "none";
    menuItem[2].children[0].style.display = "none";
    menuItem[3].children[0].style.display = "none";
    menuItem[4].children[0].style.display = "none";
    menuItem[2].children[0].style.display = "none";
    visible(menuItem[2].children[1]);
  });

  menuItem[3].addEventListener("click", () => {
    visible(goBack);
    currentTitle.innerHTML = "pages";
    menuItem[0].children[0].style.display = "none";
    menuItem[1].children[0].style.display = "none";
    menuItem[2].children[0].style.display = "none";
    menuItem[3].children[0].style.display = "none";
    menuItem[4].children[0].style.display = "none";

    visible(menuItem[3].children[1]);
    menuItem[3].children[0].style.display = "none";
  });
};

if (window.screen.width < 990) {
  showMenuBar();
}

// Hero Section cursole
class Slider {
  constructor(target) {
    this.carouselOuter = document.querySelector(target);
    this.carouselInner = this.carouselOuter.querySelector(".carousel-inner");
    this.prev = this.carouselOuter.querySelector(".prev");
    this.next = this.carouselOuter.querySelector(".next");
    this.slideIndex = 1;

    // initial styles
    this.carouselInner.setAttribute(`data-transformX`, 0);
    this.prev.setAttribute("disabled", true);
    if (this.carouselInner.children.length == 1)
      this.next.setAttribute("disabled", true);

    // prev handler
    this.prev.addEventListener("click", () => {
      this.changeSlide("prev");
      this.slideIndex--;

      if (this.slideIndex === 1) {
        this.prev.setAttribute("disabled", true);
      }

      this.next.removeAttribute("disabled");
    });

    // next handler
    this.next.addEventListener("click", () => {
      this.changeSlide("next");
      this.slideIndex++;

      if (this.slideIndex === this.carouselInner.children.length) {
        this.next.setAttribute("disabled", true);
      }

      this.prev.removeAttribute("disabled");
    });
  }

  changeSlide = (direction) => {
    let transformX = Number(this.carouselInner.getAttribute("data-transformX"));

    if (direction === "prev") {
      transformX += this.carouselInner.offsetWidth;
    } else {
      transformX -= this.carouselInner.offsetWidth;
    }

    this.carouselInner.style.transform = `translateX(${transformX}px)`;
    this.carouselInner.setAttribute(`data-transformX`, transformX);
  };
}

const heroSlider = new Slider(".carousel");

// Collections section countdowm
const countDownDate = new Date("April 24, 2024 14:29:20").getTime();

const countDate = setInterval(() => {
  let presentDay = new Date().getTime();
  let timeLeft = countDownDate - presentDay;

  // Calculate the day hours minutes seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Assign the days hours minutes and seconds
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  // Print the days hours minutes and seconds in html
  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;

  if (timeLeft < 0) {
    clearInterval(countDate);
    daysElement.innerHTML = "0";
    hoursElement.innerHTML = "0";
    minutesElement.innerHTML = "0";
    secondsElement.innerHTML = "0";
  }
}, 1000);

// product menu navigation
const recentProduct = document.getElementById("recent");
const popularProduct = document.getElementById("popular");
const topProduct = document.getElementById("top");

// assing product menu tab
const firstTab = document.querySelector(".product-tab-pane");
const secondTab = document.querySelector(".product-tab-pane2");
const thirdTab = document.querySelector(".product-tab-pane3");

// EventsListeners productMenu

// Recent products events
recentProduct.addEventListener("click", () => {
  popularProduct.classList.remove("active");
  topProduct.classList.remove("active");
  recentProduct.classList.add("active");
  firstTab.style.display = "block";
  secondTab.style.display = "none";
  thirdTab.style.display = "none";
});

// popular products events
popularProduct.addEventListener("click", () => {
  recentProduct.classList.remove("active");
  topProduct.classList.remove("active");
  popularProduct.classList.add("active");
  secondTab.style.display = "block";
  firstTab.style.display = "none";
  thirdTab.style.display = "none";
});

// top Product events
topProduct.addEventListener("click", () => {
  popularProduct.classList.remove("active");
  recentProduct.classList.remove("active");
  topProduct.classList.add("active");
  firstTab.style.display = "none";
  secondTab.style.display = "none";
  thirdTab.style.display = "block";
});
