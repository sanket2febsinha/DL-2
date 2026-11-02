<<<<<<< HEAD
const sitePreloader = document.getElementById("site-preloader");
const preloaderProgress = document.getElementById("preloader-progress");
const heroCardContainer = document.getElementById("hero-card-container");
const preloaderDuration = Number.parseFloat(
  getComputedStyle(sitePreloader).getPropertyValue("--preloader-duration"),
);
sitePreloader.classList.add("is-animating");
heroCardContainer.classList.add("hero-chips-pending");
const preloaderStart = performance.now();
let pageLoaded = document.readyState === "complete";
let preloaderAnimationComplete = false;

function revealHeroChips() {
  heroCardContainer.classList.remove("hero-chips-pending");
  heroCardContainer.classList.add("hero-chips-revealed");
}

function updatePreloader(now) {
  const progress = Math.max(
    0,
    Math.min((now - preloaderStart) / preloaderDuration, 1),
  );
  const percentage = Math.floor(progress * 100);
  preloaderProgress.textContent = `${percentage}%`;
  preloaderProgress.setAttribute("aria-label", `Loading ${percentage}%`);

  if (progress < 1) {
    requestAnimationFrame(updatePreloader);
    return;
  }

  preloaderProgress.textContent = "100%";
  preloaderAnimationComplete = true;
  dismissPreloaderWhenReady();
}

function dismissPreloaderWhenReady() {
  if (!pageLoaded || !preloaderAnimationComplete) return;

  sitePreloader.classList.add("is-dismissed");
  window.setTimeout(() => {
    sitePreloader.remove();
    revealHeroChips();
  }, 500);
}

if (!pageLoaded) {
  window.addEventListener(
    "load",
    () => {
      pageLoaded = true;
      dismissPreloaderWhenReady();
    },
    { once: true },
  );
}

requestAnimationFrame(updatePreloader);

$(document).ready(function () {
  $(".testimonials-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // Initialize Top 8 Trips Slick Slider
  $(".top-8-trips-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    dots: true,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}); // Background Slide Images
const slideBackgrounds = [
  "slide-background-one",
  "slide-background-two",
  "slide-background-three",
  "slide-background-four",
  "slide-background-five",
];

const sliderContainer = document.getElementById("slider-container");
let currentSlideIndex = 0;
let slideElements = [];

// Build Slider Elements
function initSlider() {
  sliderContainer.innerHTML = "";
  slideBackgrounds.forEach((backgroundClass, index) => {
    const div = document.createElement("div");
    div.className = `slide-item ${backgroundClass} ${index === 0 ? "active" : ""}`;
    sliderContainer.appendChild(div);
    slideElements.push(div);
  });
}

function nextSlide() {
  if (slideElements.length === 0) return;
  slideElements[currentSlideIndex].classList.remove("active");
  currentSlideIndex = (currentSlideIndex + 1) % slideElements.length;
  slideElements[currentSlideIndex].classList.add("active");
}

// Start Slider loop (Change slide every 5 seconds)
initSlider();
setInterval(nextSlide, 5000);

// UI Toggle Functionality (Header & Hero Card Hide/Reveal)
const uiToggleBtn = document.getElementById("ui-toggle-btn");
const mainHeader = document.getElementById("main-header");
const iconUp = document.getElementById("toggle-icon-up");
const iconDown = document.getElementById("toggle-icon-down");

let isUiHidden = false;

uiToggleBtn.addEventListener("click", () => {
  isUiHidden = !isUiHidden;
  if (isUiHidden) {
    mainHeader.classList.add("header-hidden");
    heroCardContainer.classList.add("hero-hidden");
    iconUp.classList.replace("ui-toggle-icon-visible", "ui-toggle-icon-hidden");
    iconDown.classList.replace(
      "ui-toggle-icon-hidden",
      "ui-toggle-icon-visible",
    );
  } else {
    mainHeader.classList.remove("header-hidden");
    heroCardContainer.classList.remove("hero-hidden");
    iconUp.classList.replace("ui-toggle-icon-hidden", "ui-toggle-icon-visible");
    iconDown.classList.replace(
      "ui-toggle-icon-visible",
      "ui-toggle-icon-hidden",
    );
  }
});

const backToTopButton = document.getElementById("back-to-top");
const backToTopScrollThreshold = 300;

function updateBackToTopVisibility() {
  backToTopButton.classList.toggle(
    "is-visible",
    window.scrollY > backToTopScrollThreshold,
  );
}

window.addEventListener("scroll", updateBackToTopVisibility, {
  passive: true,
});
updateBackToTopVisibility();

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
});
=======
// Main JavaScript file
>>>>>>> e28702d2baabb50de17a9c1f8dd8ae93c7a029e2
