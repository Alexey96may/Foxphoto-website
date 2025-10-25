import * as flsFunctions from "./ts/functions/functions";
import { DropDownList } from "./ts/ui/dropDownList";
import { Burger } from "./ts/ui/burger";
import { SeeMore } from "./ts/ui/seeMore";
import "./assets/scss/main.scss";

flsFunctions.isWebp();
flsFunctions.isAvif();

const enclosedLists = document.getElementById("enclosedLists") as HTMLElement;
const dropDownLists = enclosedLists.getElementsByClassName("nav__list--enc");

for (let i = 0; i < dropDownLists.length; i++) {
    new DropDownList(dropDownLists[i] as HTMLElement);
}

new Burger();
new SeeMore();
