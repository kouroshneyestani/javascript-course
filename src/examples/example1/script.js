import './style.css';
import { setupCounter } from "./counter.js";

document.querySelector(
    "#example"
).innerHTML = `<button id="counter" type="button"></button>`;

setupCounter(document.querySelector("#counter"));
