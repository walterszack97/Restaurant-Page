import { renderHomepage } from "./homepage";
import { renderMenuPage } from "./menupage";
import { renderContactPage } from "./contactpage";

const pageLoad = () => {
  console.log("pageload working");

  const body = document.querySelector("body");
  const contentContainer = document.createElement("div");
  contentContainer.setAttribute("id", "content");

  body.appendChild(contentContainer);

  const mainpageContainer = document.createElement("div");
  mainpageContainer.setAttribute("id", "mainpage-container");
  contentContainer.appendChild(mainpageContainer);

  const headerContainer = document.createElement("div");
  headerContainer.setAttribute("class", "header-container large-font");
  mainpageContainer.appendChild(headerContainer);

  const headerFrame = document.createElement("div");
  headerFrame.setAttribute("class", "frame");
  headerFrame.setAttribute("id", "header");
  headerFrame.innerText = "BOBS BURGERS";
  headerContainer.appendChild(headerFrame);

  const navContainer = document.createElement("div");
  navContainer.setAttribute("id", "navContainer");
  mainpageContainer.append(navContainer);

  const navBar = document.createElement("div");
  navBar.setAttribute("id", "navBar");
  navContainer.appendChild(navBar);

  const mediumP1 = document.createElement("p");
  mediumP1.setAttribute("class", "medium-font");
  mediumP1.setAttribute("id", "homeNav");
  const mediumP2 = document.createElement("p");
  mediumP2.setAttribute("class", "medium-font");
  mediumP2.setAttribute("id", "menuNav");
  const mediumP3 = document.createElement("p");
  mediumP3.setAttribute("class", "medium-font");
  mediumP3.setAttribute("id", "contactNav");

  mediumP1.innerHTML = "HOME";
  mediumP2.innerHTML = "MENU";
  mediumP3.innerHTML = "CONTACT";

  navBar.appendChild(mediumP1);
  navBar.appendChild(mediumP2);
  navBar.appendChild(mediumP3);
};

//add event listeners to each navItem
const pageSelect = () => {
  const navItems = document.querySelectorAll("#navBar");
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", (event) => {
      if (event.target.id == "homeNav") {
        console.log("home");
        pageClear();
        renderHomepage();
      } else if (event.target.id == "menuNav") {
        console.log("menu");
        pageClear();
        renderMenuPage();
      } else if (event.target.id == "contactNav") {
        pageClear();
        renderContactPage();
        console.log("contact");
      }
    });
  }
};

//function to clear screen when changing
const pageClear = () => {
  const homeContainer = document.querySelector("#homeContent");
  const menuContainer = document.querySelector("#menuContent");
  const contactContainer = document.querySelector("#contactContent");
  if (homeContainer) {
    homeContainer.remove();
  }
  if (menuContainer) {
    menuContainer.remove();
  }
  if (contactContainer) {
    contactContainer.remove();
  }
};

export { pageLoad, pageSelect };
