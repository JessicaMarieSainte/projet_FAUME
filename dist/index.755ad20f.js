//header hidden and invert color navBar and searchBar
let $sectionBuy = document.querySelector("#buySection");
let $headerBar = document.querySelector(".header__backSandro");
let $navBar = document.querySelector(".header__nav");
let $searchBar = document.querySelector(".nav__searchBar");
let $backgroundBefore = document.querySelector(".background__headerChangies");
let $menuBigDesktop = document.querySelector("#menu__BigDesktop");
let $abigDesktop = document.querySelectorAll(".menu__BigDesktop a");
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
        $backgroundBefore.style.transform = "scaleY(70)";
        $menuBigDesktop.style.display = "none";
    }
}
window.addEventListener("scroll", ()=>{
    var currentScroll = window.scrollY;
    if (window.matchMedia("(min-width: 850px)").matches && 40 > currentScroll) {
        console.log("je suis la");
        $headerBar.style.display = "";
        $navBar.style.top = "";
        $navBar.style.filter = "";
        $searchBar.style.marginTop = "";
        $searchBar.style.filter = "";
        $backgroundBefore.style.transform = "";
        $menuBigDesktop.style.display = "block";
    }
    if (window.matchMedia("(max-width: 849px)").matches && 40 > currentScroll) {
        console.log("non non je suis la");
        $headerBar.style.display = "";
        $navBar.style.top = "";
        $navBar.style.filter = "";
        $searchBar.style.marginTop = "";
        $searchBar.style.filter = "";
        $backgroundBefore.style.transform = "";
        $menuBigDesktop.style.display = "block";
    } else if (40 < currentScroll) {
        console.log("non je suis la");
        headerChangies();
    }
    prevScroll = currentScroll;
});
let $menuClose = document.querySelector(".closeCross");
let $menuOpen = document.querySelector(".burger");
let $menuHidden = document.querySelector(".menuhidden");
$menuOpen.addEventListener("click", ()=>{
    BackgroundmenuInvisble();
    $navBar.removeEventListener("mouseover", BackgroundmenuInvisble);
    $menuBigDesktop.removeEventListener("mouseover", BackgroundmenuInvisble);
    $menuHidden.style.transform = "translate(0)";
    $sectionBuy.style.filter = "brightness(0.4)";
    $headerBar.style.filter = "brightness(0.4)";
    $navBar.style.filter = "brightness(0.4)";
    $searchBar.style.filter = "brightness(0.4)";
    $menuBigDesktop.style.filter = "brightness(0.4)";
});
$menuClose.addEventListener("click", ()=>{
    $menuHidden.style.transform = "translate(-100%)";
    $sectionBuy.style.filter = "";
    $sectionBuy.style.filter = "";
    $headerBar.style.filter = "";
    $navBar.style.filter = "";
    $searchBar.style.filter = "";
    $menuBigDesktop.style.filter = "";
});
let $liOpen = document.querySelectorAll(".liOpen");
let $spanOpen = document.querySelectorAll(".liOpen span");
let $ulHidden = document.querySelectorAll(".ulHidden");
for(let i = 0; i < $liOpen.length; i++)$liOpen[i].addEventListener("click", ()=>{
    $ulHidden[i].classList.toggle("isOpen");
    $liOpen[i].classList.toggle("liOpenOpen");
});
//style changing on media screen (min-width: 850px)
function BackgroundMenuVisible() {
    $backgroundBefore.style.transform = "scaleY(75)";
    $navBar.style.filter = "invert(1)";
    $searchBar.style.filter = "invert(1)";
    $abigDesktop[1].style.color = "black";
    $abigDesktop[0].style.color = "black";
    $abigDesktop[2].style.color = "black";
    $abigDesktop[3].style.color = "black";
}
function BackgroundmenuInvisble() {
    $backgroundBefore.style.transform = "scaleY(0)";
    $navBar.style.filter = "";
    $searchBar.style.filter = "";
    $abigDesktop[1].style.color = "";
    $abigDesktop[0].style.color = "";
    $abigDesktop[2].style.color = "";
    $abigDesktop[3].style.color = "";
}
$navBar.addEventListener("mouseover", BackgroundMenuVisible);
$navBar.addEventListener("mouseleave", BackgroundmenuInvisble);
$menuBigDesktop.addEventListener("mouseover", BackgroundMenuVisible);
$menuBigDesktop.addEventListener("mouseleave", BackgroundmenuInvisble);

//# sourceMappingURL=index.755ad20f.js.map
