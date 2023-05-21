import "./styles.css";
import { pageLoad, pageSelect } from "./pageload";
import { renderHomepage } from "./homepage";
console.log("working");
pageLoad();
renderHomepage();

const navBar = document.querySelector("#navBar");
navBar.addEventListener("click", pageSelect());
