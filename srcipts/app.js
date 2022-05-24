//header hidden and invert color navBar and searchBar
let $sectionBuy = document.querySelector("#buySection");
let $headerBar = document.querySelector(".header__backSandro");
let $navBar = document.querySelector(".header__nav");
let $searchBar = document.querySelector(".nav__searchBar");
let $backgroundBefore = document.querySelector(".background__headerChangies");
let $menuBigDesktop = document.querySelector("#menu__BigDesktop");
var prevScroll = window.scrollY;

function headerChangies() {
  $headerBar.style.display = "none";
  $navBar.style.top = "0";
  $navBar.style.filter = "invert(1)";
  $searchBar.style.marginTop = "-30px";
  $searchBar.style.filter = "invert(1)";
  if (window.matchMedia("(min-width: 850px)").matches) {
    $backgroundBefore.style.transform = "scaleY(35)";
    $menuBigDesktop.style.display = "none";
  } else {
    $backgroundBefore.style.transform = "scaleY(60)";
  }
}

window.addEventListener("scroll", () => {
  var currentScroll = window.scrollY;
  if (40 > currentScroll) {
    $headerBar.style.display = "";
    $navBar.style.top = "";
    $navBar.style.filter = "";
    $searchBar.style.marginTop = "";
    $searchBar.style.filter = "";
    $backgroundBefore.style.transform = "";
    $menuBigDesktop.style.display = "block";
  } else {
    headerChangies();
  }

  prevScroll = currentScroll;
});

let $menuClose = document.querySelector(".closeCross");
let $menuOpen = document.querySelector(".burger");
let $menuHidden = document.querySelector(".menuhidden");

$menuOpen.addEventListener("click", () => {
  $menuHidden.style.transform = "translate(0)";
  $sectionBuy.style.filter = "brightness(0.4)";
});
$menuClose.addEventListener("click", () => {
  $menuHidden.style.transform = "translate(-100%)";
  $sectionBuy.style.filter = "";
});

let $liOpen = document.querySelectorAll(".liOpen");
let $spanOpen = document.querySelectorAll(".liOpen span");
let $ulHidden = document.querySelectorAll(".ulHidden");

for (let i = 0; i < $liOpen.length; i++) {
  $liOpen[i].addEventListener("click", () => {
    $ulHidden[i].classList.toggle("isOpen");
    $liOpen[i].classList.toggle("liOpenOpen");
  });
}

function BackgroundMenuVisible() {
  $backgroundBefore.style.transform = "scaleY(75)";
  $navBar.style.filter = "invert(1)";
  $menuBigDesktop.style.filter = "invert(1)";
}
function BackgroundmenuInvisble() {
  $backgroundBefore.style.transform = "scaleY(0)";
  $navBar.style.filter = "";
  $menuBigDesktop.style.filter = "";
}
$navBar.addEventListener("mouseover", () => {
  BackgroundMenuVisible();
});

$navBar.addEventListener("mouseleave", () => {
  BackgroundmenuInvisble();
});
$menuBigDesktop.addEventListener("mouseover", () => {
  BackgroundMenuVisible();
});

$menuBigDesktop.addEventListener("mouseleave", () => {
  BackgroundmenuInvisble();
});
