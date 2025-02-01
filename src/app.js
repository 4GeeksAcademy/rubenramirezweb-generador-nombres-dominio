/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

let pronoun = ["the", "our", "his"];
let adj = ["great", "big", "amazing"];
let noun = ["jogger", "racoon", "dog", "merchant", "diver"];

// Con estos ciclos se generan los dominios
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      console.log(pronoun[i] + adj[j] + noun[k] + ".com");
      console.log(pronoun[i] + adj[j] + noun[k] + ".net");
      console.log(pronoun[i] + adj[j] + noun[k] + ".co");
      console.log(pronoun[i] + adj[j] + noun[k] + ".us");
      console.log(pronoun[i] + adj[j] + noun[k] + ".io");
    }
  }
}
