/**********
Elements
**********/
openSideMenu = document.querySelector(".arrowsidemenu");
whiteCircle = document.querySelector(".opensidemenu");
sideMenu = document.querySelector(".sidemenu");
menuItems = document.querySelector(".items");
homePage = document.querySelector(".homepage");
aboutPage = document.querySelector(".aboutpage");
workPage = document.querySelector(".workpage");
contactPage = document.querySelector(".contactpage");
introVid = document.querySelector(".introvid");
let menuIsOpen = false;
let viewModeOn = false;
/**********
Listeners
**********/
openSideMenu.addEventListener("click", sideMenuFunctions);
menuItems.addEventListener("click", viewMode);
introVid.addEventListener("ended", videoEnded);

/**********
Functions
**********/
function sideMenuFunctions() {
  menuIsOpen = !menuIsOpen;

  if (menuIsOpen === true) {
    openSideMenu.style.transform = "rotate(180deg)";
    sideMenu.style.transform = "translateX(55vw)";
    sideMenu.style.background = "black";
    viewModeOn = false;
  } else {
    openSideMenu.style.transform = "rotate(0deg)";
    sideMenu.style.transform = "translateX(100%)";
    sideMenu.style.background = "transparent";
    openSideMenu.style.transform = "translateX(-10px)";
    viewModeOn = false;
  }
  if (menuIsOpen === false || viewModeOn === false) {
    whiteCircle.style.backgroundColor = "white";
    openSideMenu.style.color = "black";
    whiteCircle.style.transform = "rotate(0deg)";
  }

  console.log("Clicked on arrow");
  console.log("Menu is Open", menuIsOpen);
  console.log("ViewMode is On", viewModeOn);
  console.log("---------------------");
}

if (menuIsOpen === true) {
  openSideMenu.style.transform = "rotate(180deg)";
  openSideMenu.style.transform = "translateX(55vw)";
  sideMenu.style.transform = "translateX(0px)";
  sideMenu.style.background = "black";
} else {
  openSideMenu.style.transform = "rotate(0deg)";
  sideMenu.style.transform = "translateX(100%)";
  sideMenu.style.background = "transparent";
  openSideMenu.style.transform = "translateX(-10px)";
}

function viewMode(e) {
  viewModeOn = true;

  if (viewModeOn === true) {
    sideMenu.style.transform = "translateX(0)";
    whiteCircle.style.backgroundColor = "black";
    openSideMenu.style.color = "white";
    openSideMenu.style.transform = "translateX(-45px)";
    whiteCircle.style.transform = "rotate(180deg)";
  } else {
    sideMenu.style.transform = "translateX(0)";
    whiteCircle.style.backgroundColor = "white";
    openSideMenu.style.color = "black";
    openSideMenu.style.transform = "translateX(0px)";
    whiteCircle.style.transform = "rotate(0deg)";
  }

  console.log("Clicked on item");
  console.log("Menu is Open", menuIsOpen);
  console.log("ViewMode is On", viewModeOn);
  console.log("---------------------");
}

document.addEventListener("DOMContentLoaded", function () {
  homePage.style.display = "none";
  aboutPage.style.display = "none";
  workPage.style.display = "none";
  contactPage.style.display = "none";
  introVid.play();
  scroll(0, 0);
});

function videoEnded(e) {
  introVid.style.display = "none";
  homePage.style.display = "flex";
  aboutPage.style.display = "flex";
  workPage.style.display = "flex";
  contactPage.style.display = "flex";
}
