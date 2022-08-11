//Co-authored-by: Spencer Dennis <sjdennis2113@gmail.com>"
//const type = document.querySelector("barbarian").value;


//User Interface Logic

const name = document.querySelector("input#nameinput").value; 
const selection = document.querySelector("type").value;

function nameoffunction(event) {
  event.preventDefault();
  hideResults();
    const selection = document.querySelector("type").value;

    if (type === barbarian) {
        document.getElementById("barbarian-stats").removeAttribute("class");
      } else if (type === cleric) {
        document.getElementById("cleric-stats").removeAttribute("class");
      } else if (type === ranger) {
        document.getElementById("ranger-stats").removeAttribute("class");
      }
      else if (type === paladin) {
        document.getElementById("paladin-stats").removeAttribute("class");
      }
  }

  window.onload = function() {
    document.querySelector("form").addEventListener("submit", nameoffunction)  
  }

//business logic

let barbarian = document.getElementById("barbarian-stats");
barbarian.setAttribute("class", "hidden");

let cleric = document.getElementById("cleric-stats");
cleric.setAttribute("class", "hidden");

let ranger = document.getElementById("ranger-stats");
ranger.setAttribute("class", "hidden");

let paladin = document.getElementById("paladin-stats");
paladin.setAttribute("class", "hidden");