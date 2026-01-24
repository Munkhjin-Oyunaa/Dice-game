// Toglogchiin eeljiig hadgalah huvisagch, negdugeer toglogchiig 0, hoyrdugaar toglogchiig 1 gej temdegley.
var activePlayer = 1;

// Toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

// Toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huvisagch

var roundScore = 0;

// Shoo ali talaaraa unasang hadgalah huvisagch, 1-6 gesen utgiig ene huvisagchid sanamsarguigeer uusgej ugnu.

var dice = Math.floor(Math.random() * 6) + 1;

// document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").textContent = dice;

document.querySelector("#score-1").textContent = 0;
document.querySelector("#score-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector(".dice").style.display = "none";

console.log("Shoo :" + dice);
