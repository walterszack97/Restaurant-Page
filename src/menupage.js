const renderMenuPage = () => {
  const mainContainer = document.querySelector("#mainpage-container");
  const menuContent = document.createElement("div");
  menuContent.setAttribute("id", "menuContent");
  mainContainer.appendChild(menuContent);

  const burgerContainer = document.createElement("div");
  burgerContainer.setAttribute("id", "burgerArea");
  burgerContainer.setAttribute("class", "foodArea homeContainers frame");
  menuContent.appendChild(burgerContainer);

  var foodTitle = document.createElement("p");
  foodTitle.setAttribute("id", "foodTitle");
  foodTitle.textContent = "BURGERS";

  burgerContainer.appendChild(foodTitle);
  var burgerOption = document.createElement("div");
  burgerOption.setAttribute("class", "burgerSelection");
  burgerContainer.appendChild(burgerOption);

  var burgerHeader = document.createElement("p");
  var burgerFooter = document.createElement("p");
  burgerHeader.setAttribute("class", "foodHeader");
  burgerFooter.setAttribute("class", "foodFooter");
  burgerHeader.textContent = "5.95 ORIGINAL";
  burgerFooter.textContent = "THE CLASSIC";

  burgerOption.appendChild(burgerHeader);
  burgerOption.appendChild(burgerFooter);

  var burgerOption = document.createElement("div");
  burgerOption.setAttribute("class", "burgerSelection");
  burgerHeader = document.createElement("p");
  burgerFooter = document.createElement("p");
  burgerHeader.setAttribute("class", "foodHeader");
  burgerFooter.setAttribute("class", "foodFooter");
  burgerHeader.textContent = "5.95  DONT YOU FOUR CHEDDAR 'BOUT ME";
  burgerFooter.textContent = "COMES WITH FOUR KINDS OF CHEDDAR";
  burgerOption.appendChild(burgerHeader);
  burgerOption.appendChild(burgerFooter);
  burgerContainer.appendChild(burgerOption);

  var burgerOption = document.createElement("div");
  burgerOption.setAttribute("class", "burgerSelection");
  burgerHeader = document.createElement("p");
  burgerFooter = document.createElement("p");
  burgerHeader.setAttribute("class", "foodHeader");
  burgerFooter.setAttribute("class", "foodFooter");
  burgerHeader.textContent = "5.95 SWEET HOME AVACADO";
  burgerFooter.textContent = "COMES WITH AVACADO";
  burgerOption.appendChild(burgerHeader);
  burgerOption.appendChild(burgerFooter);
  burgerContainer.appendChild(burgerOption);

  var burgerOption = document.createElement("div");
  burgerOption.setAttribute("class", "burgerSelection");
  burgerHeader = document.createElement("p");
  burgerFooter = document.createElement("p");
  burgerHeader.setAttribute("class", "foodHeader");
  burgerFooter.setAttribute("class", "foodFooter");
  burgerHeader.textContent = "5.95 EGGERS CAN'T BE CHEESERS";
  burgerFooter.textContent = "COMES WITH AN EGG";
  burgerOption.appendChild(burgerHeader);
  burgerOption.appendChild(burgerFooter);
  burgerContainer.appendChild(burgerOption);

  var burgerOption = document.createElement("div");
  burgerOption.setAttribute("class", "burgerSelection");
  burgerHeader = document.createElement("p");
  burgerFooter = document.createElement("p");
  burgerHeader.setAttribute("class", "foodHeader");
  burgerFooter.setAttribute("class", "foodFooter");
  burgerHeader.textContent = "5.95 GOURDON HAMSEY";
  burgerFooter.textContent = "COMES WITH HAM";
  burgerOption.appendChild(burgerHeader);
  burgerOption.appendChild(burgerFooter);
  burgerContainer.appendChild(burgerOption);

  var burgerOption = document.createElement("div");
  burgerOption.setAttribute("class", "burgerSelection");
  burgerHeader = document.createElement("p");
  burgerFooter = document.createElement("p");
  burgerHeader.setAttribute("class", "foodHeader");
  burgerFooter.setAttribute("class", "foodFooter");
  burgerHeader.textContent = "5.95 BURGER OF THE DAY";
  burgerFooter.textContent = "CHECK THE BOARD OR ASK AN EMPLOYEE";
  burgerOption.appendChild(burgerHeader);
  burgerOption.appendChild(burgerFooter);
  burgerContainer.appendChild(burgerOption);

  const sidesContainer = document.createElement("div");
  sidesContainer.setAttribute("id", "sidesArea");
  sidesContainer.setAttribute("class", "foodArea homeContainers frame");
  menuContent.appendChild(sidesContainer);

  var foodTitle = document.createElement("p");
  foodTitle.setAttribute("id", "foodTitle");
  foodTitle.textContent = "SIDES";
  sidesContainer.appendChild(foodTitle);

  var sidesOption = document.createElement("div");
  sidesOption.setAttribute("class", "sidesSelection");
  sidesContainer.appendChild(sidesOption);

  var sidesHeader = document.createElement("p");
  sidesHeader.setAttribute("class", "foodHeader");
  sidesHeader.textContent = "1.50 FRIES";
  sidesOption.appendChild(sidesHeader);

  var sidesOption = document.createElement("div");
  sidesOption.setAttribute("class", "sidesSelection");
  sidesHeader = document.createElement("p");
  sidesHeader.setAttribute("class", "foodHeader");
  sidesHeader.textContent = "2.00 ONION RINGS";
  sidesOption.appendChild(sidesHeader);
  sidesContainer.appendChild(sidesOption);

  var sidesOption = document.createElement("div");
  sidesOption.setAttribute("class", "sidesSelection");
  sidesHeader = document.createElement("p");
  sidesHeader.setAttribute("class", "foodHeader");
  sidesHeader.textContent = "1.50 CHIPS";
  sidesOption.appendChild(sidesHeader);
  sidesContainer.appendChild(sidesOption);

  var sidesOption = document.createElement("div");
  sidesOption.setAttribute("class", "sidesSelection");
  sidesHeader = document.createElement("p");
  sidesHeader.setAttribute("class", "foodHeader");
  sidesHeader.textContent = "2.00 JALPENO POPPERS";
  sidesOption.appendChild(sidesHeader);
  sidesContainer.appendChild(sidesOption);

  var sidesOption = document.createElement("div");
  sidesOption.setAttribute("class", "sidesSelection");
  sidesHeader = document.createElement("p");
  sidesHeader.setAttribute("class", "foodHeader");
  sidesHeader.textContent = "2.00 PRETZEL BITES";
  sidesOption.appendChild(sidesHeader);
  sidesContainer.appendChild(sidesOption);

  const drinksContainer = document.createElement("div");
  drinksContainer.setAttribute("id", "drinksArea");
  drinksContainer.setAttribute("class", "foodArea homeContainers frame");
  menuContent.appendChild(drinksContainer);

  var foodTitle = document.createElement("p");
  foodTitle.setAttribute("id", "foodTitle");
  foodTitle.textContent = "DRINKS";
  drinksContainer.appendChild(foodTitle);

  var drinksHeader = document.createElement("p");
  drinksHeader.setAttribute("class", "foodHeader");
  drinksHeader.textContent = "1.50 SOFT DRINKS";
  drinksContainer.appendChild(drinksHeader);

  var drinksHeader = document.createElement("p");
  drinksHeader.setAttribute("class", "foodHeader");
  drinksHeader.textContent = "1.50 COFFEE";
  drinksContainer.appendChild(drinksHeader);
};

export { renderMenuPage };
