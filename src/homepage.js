import familyImage from "./imgs/familyImg.png";

const renderHomepage = () => {
  const mainContainer = document.querySelector("#mainpage-container");
  const homeContent = document.createElement("div");
  homeContent.setAttribute("id", "homeContent");
  mainContainer.appendChild(homeContent);

  const homeContainers = document.createElement("div");
  homeContainers.setAttribute("class", "homeContainers");
  homeContent.appendChild(homeContainers);

  const about = document.createElement("div");
  about.setAttribute("id", "about");
  homeContainers.appendChild(about);

  const familyImg = new Image();
  familyImg.setAttribute("id", "family_pic");
  familyImg.src = familyImage;
  about.appendChild(familyImg);
};

export { renderHomepage };
