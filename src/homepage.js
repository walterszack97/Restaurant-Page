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

  const aboutInfo = document.createElement("div");
  aboutInfo.setAttribute("class", "homeContainers frame");
  aboutInfo.setAttribute("id", "aboutInfo");
  homeContent.appendChild(aboutInfo);

  const hoursHeader = document.createElement("div");
  hoursHeader.setAttribute("class", "header");
  hoursHeader.setAttribute("id", "frame");
  hoursHeader.innerHTML = "HOURS";
  aboutInfo.appendChild(hoursHeader);

  const info = document.createElement("div");
  info.setAttribute("class", "info");
  aboutInfo.appendChild(info);

  const hours1 = document.createElement("p");
  const hours2 = document.createElement("p");
  hours1.innerHTML = "Sun - Thurs: 11:30am - 8pm";
  hours2.innerHTML = "Fri and Sat: 11:30am - 9pm";
  info.appendChild(hours1);
  info.appendChild(hours2);

  const locationInfo = document.createElement("div");
  locationInfo.setAttribute("class", "homeContainers frame");
  locationInfo.setAttribute("id", "locationInfo");
  homeContent.appendChild(locationInfo);

  const locationHeader = document.createElement("div");
  locationHeader.setAttribute("class", "header");
  locationHeader.setAttribute("id", "location");
  locationHeader.innerHTML = "LOCATION";
  locationInfo.appendChild(locationHeader);

  const locationAdress = document.createElement("div");
  locationAdress.setAttribute("class", "info");
  locationAdress.innerHTML = "Ocean Avenue in Seymour's Bay, New Jersey";
  locationInfo.appendChild(locationAdress);
};

export { renderHomepage };
