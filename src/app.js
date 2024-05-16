/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const generateButton = document.getElementById("generateButton");
  generateButton.addEventListener("click", function() {
    generateDomains();
  });

  function generateDomains() {
    let pronoun = ["el", "nuestro", "mi", "tu"];
    let adj = ["genial", "grande", "pequeño", "increíble"];
    let noun = ["corredor", "mapache", "sitio", "empresa"];
    let extensions = [".com", ".net", ".us", ".io", ".es"];
    let domainList = document.getElementById("domainList");

    domainList.innerHTML = "";

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < extensions.length; l++) {
            let domain = pronoun[i] + adj[j] + noun[k] + extensions[l];
            let listItem = document.createElement("li");
            listItem.textContent = domain;
            domainList.appendChild(listItem);
          }
        }
      }
    }
  }
};
