import { changeHeaderBackground } from "./header/header.js";
import { questions } from "./questions/questions.js";

// Call the functions there
window.onscroll = changeHeaderBackground;
questions();
