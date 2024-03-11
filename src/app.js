/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The", "My"];
  let subject = ["cat", "dog", "fish", "elephant", "tiger"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let possetion = ["mouse", "smartphone", "modem"];
  let where = ["on the street", "in my house", "in my driveway"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return `${pronoun[proIndx]} ${subject[subjIndx]} ${action[actionIndex]} ${possetion[possetionIndex]} ${where[whereIndex]}`;
};
