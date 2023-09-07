const renderContactPage = () => {
  const mainContainer = document.querySelector("#mainpage-container");
  const contactContent = document.createElement("div");
  contactContent.setAttribute("id", "contactContent");
  mainContainer.appendChild(contactContent);

  const contactContainers = document.createElement("div");
  contactContainers.setAttribute("class", "homeContainers frame");
  contactContent.appendChild(contactContainers);

  const about = document.createElement("div");
  about.setAttribute("id", "about");
  contactContainers.appendChild(about);

  var mainInfo = document.createElement("p");
  mainInfo.setAttribute("class", "large-font");
  mainInfo.innerText = "OCEAN AVE, NJ";
  contactContainers.appendChild(mainInfo);

  var mainInfo = document.createElement("p");
  mainInfo.setAttribute("class", "large-font");
  mainInfo.innerText = "(###)-###-####";
  contactContainers.appendChild(mainInfo);
};

export { renderContactPage };
