//Co-authored-by: Spencer Dennis <sjdennis2113@gmail.com>"
//const type = document.querySelector("barbarian").value;

//business logic

let barbarian = document.getElementById("barbarian-stats");
let cleric = document.getElementById("cleric-stats");
let ranger = document.getElementById("ranger-stats");
let paladin = document.getElementById("paladin-stats");


//User Interface Logic
function hideResults() {
  document.getElementById("barbarian-stats").setAttribute("class", "hidden");
  document.getElementById("cleric-stats").setAttribute("class", "hidden");
  document.getElementById("ranger-stats").setAttribute("class", "hidden");
  document.getElementById("paladin-stats").setAttribute("class", "hidden");
}

function nameoffunction(event) {
  event.preventDefault();
  hideResults();
    const barbarian = document.getElementById("barbarian-stats").value;
    const cleric = document.getElementById("cleric-stats").value;
    const ranger = document.getElementById("ranger-stats").value;
    const paladin = document.getElementById("paladin-stats").value;

    console.log(barbarian + cleric + ranger + paladin)
    const c = document.getElementById("type").value;
    console.log(c)

    if (c === "Barbarian") {
        document.getElementById("barbarian-stats").removeAttribute("class");
        console.log("if statement")
      } 
      else if (c === "cleric") {
        document.getElementById("cleric-stats").removeAttribute("class");
      } else if (c === "ranger") {
        document.getElementById("ranger-stats").removeAttribute("class");
      }
      else if (c === "paladin") {
        document.getElementById("paladin-stats").removeAttribute("class");
      }
      console.log("did it run")
  }

  window.addEventListener("load", function() {
    document.getElementById("character-type").addEventListener("submit", nameoffunction);
    console.log("page load function worked")
  });

