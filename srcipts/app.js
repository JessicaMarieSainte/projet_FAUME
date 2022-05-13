//header hidden and invert color navBar and searchBar
let $headerBar = document.querySelector(".header__backSandro");
let $navBar = document.querySelector(".header__nav");
let $searchBar = document.querySelector(".nav__searchBar");
let $backgroundBefore = document.querySelector(".background__headerChangies");
var prevScroll = window.scrollY;

function headerChangies() {
  $headerBar.style.display = "none";
  $navBar.style.top = "0";
  $navBar.style.filter = "invert(1)";
  $searchBar.style.marginTop = "-30px";
  $searchBar.style.filter = "invert(1)";
  $backgroundBefore.style.transform = "scaleY(60)";
}

window.addEventListener("scroll", () => {
  var currentScroll = window.scrollY;
  console.log("avant", currentScroll);
  if (40 > currentScroll) {
    $headerBar.style.display = "";
    $navBar.style.top = "";
    $navBar.style.filter = "";
    $searchBar.style.marginTop = "";
    $searchBar.style.filter = "";
    $backgroundBefore.style.transform = "scaleY(0)";
  } else {
    headerChangies();
  }

  prevScroll = currentScroll;
  console.log("apres", currentScroll);
});

let $menuClose = document.querySelector(".closeCross");
let $menuOpen = document.querySelector(".burger");
let $menuHidden = document.querySelector(".menuhidden");

$menuOpen.addEventListener("click", () => {
  $menuHidden.style.transform = "translate(0)";
});
$menuClose.addEventListener("click", () => {
  $menuHidden.style.transform = "translate(-100%)";
});

let $liOpen = document.querySelectorAll(".liOpen");
