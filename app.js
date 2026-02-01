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
document.getElementById("score-0").textContent = "0";

document.getElementById("score-1").textContent = "0";

document.getElementById("current-1").textContent = "0";

document.getElementById("current-0").textContent = "0";
var diceDom = document.querySelector(".dice");

diceDom.style.display = "none";

// Shoog shideh event listener

document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 dotorh sanamsargui neg too gargaj avna
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // shoonii zurgiig web deer gargaj irne.
  diceDom.style.display = "block";

  // Buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne.
  diceDom.src = "dice-" + diceNumber + ".png";

  //Buusan too n 1 ees yalgaatai bol idevhtei toglogchiin eeljiin onoog uurchilnu
  if (diceNumber !== 1) {
    //1-ees yalgaatai too buulaa. Buusan toog toglchid nemj ugnuu
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 buusan tul toglogchiin eeljiig ene hesegt solij ugnu.

    switchToNextPlayer();
  }
});

// HOLD tovchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  // Ug toglogchiin tsugluulsan eeljnii onoog global onoon deer n nemj ugnu.
  //   if (activePlayer === 0) {
  //     scores[0] = scores[0] + roundScore;
  //   } else {
  //     scores[1] = scores[1] + roundScore;
  //   }

  scores[activePlayer] = scores[activePlayer] + roundScore;

  // Delgets deer onoog n uurchilnu
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  // Ug toglogch hojson esehiig (onoo n 100-s ih eseh) shalgah
  if (scores[activePlayer] >= 10) {
    // Ylagch gesen textiig nerniih n orond gargana
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    //toglogchiin eeljiig solino.
    switchToNextPlayer();
  }
});

// Ene function n togloh eeljiig daraachiin toglogch ruu shiljuuldeg.
function switchToNextPlayer() {
  //Ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Toglogchiin eeljiig nuguu toglogch ruu shiljvvlne.

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // ulaan tsegiig shiljvvleh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // shoog tvr alga bolgoh
  diceDom.style.display = "none";
}
