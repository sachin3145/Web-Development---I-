const nav = document.getElementsByTagName("nav")[0];
const flexSection = document.getElementById("flex");
const gridSection = document.getElementById("grid");
const animationSection = document.getElementById("animation");

const showNav = document.getElementById("showNav");
const showFlex = document.getElementById("showFlex");
const showGrid = document.getElementById("showGrid");
const showAnimation = document.getElementById("showAnimation");

let navVisible = false;
let mobileView = window.innerWidth < 501;

window.addEventListener("resize", () => {
  mobileView = window.innerWidth < 501;
  nav.style.display = mobileView ? "none" : "flex";
});

showNav.addEventListener("click", () => {
  if (mobileView) {
    nav.style.display = navVisible ? "none" : "flex";
    navVisible = !navVisible;
  }
});

showFlex.addEventListener("click", () => {
  if (mobileView) {
    nav.style.display = "none";
    navVisible = false;
  }
  flexSection.style.display = "flex";
  gridSection.style.display = "none";
  animationSection.style.display = "none";
});

showGrid.addEventListener("click", () => {
  if (mobileView) {
    nav.style.display = "none";
    navVisible = false;
  }
  flexSection.style.display = "none";
  gridSection.style.display = "grid";
  animationSection.style.display = "none";
});

showAnimation.addEventListener("click", () => {
  if (mobileView) {
    nav.style.display = "none";
    navVisible = false;
  }
  flexSection.style.display = "none";
  gridSection.style.display = "none";
  animationSection.style.display = "flex";
});
