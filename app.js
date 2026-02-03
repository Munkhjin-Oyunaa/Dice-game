// Togloomiin buh gazart ashigladah global huvisagchdiig end zarlay

//togloom duussan esehiig shalgah huvisagch
var isNewGame;

// Ali toglogchiin eeljiig harah huvisagch
var activePlayer;
// Hoyr toglogchiin tsugluulsan onoonuud
var scores;
// Idevhitei toglogchiin tsugluulj baigaa eeljiin onoo.
var roundScore;

var diceDom = document.querySelector(".dice");

//Togloomiig ehluulne.
initGame();

function initGame() {
  // togloom ehellee gedeg tuluvt oruulna.
  isNewGame = true;

  // Toglogchiin eeljiig hadgalah huvisagch, negdugeer toglogchiig 0, hoyrdugaar toglogchiig 1 gej temdegley.
  activePlayer = 0;

  // Toglogchdiin tsugluulsan onoog hadgalah huvisagch
  scores = [0, 0];

  // Toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huvisagch

  roundScore = 0;

  document.getElementById("score-0").textContent = "0";

  document.getElementById("score-1").textContent = "0";

  document.getElementById("current-1").textContent = "0";

  document.getElementById("current-0").textContent = "0";

  // Toglogchiin neriig butsaaj gargah
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}
// Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
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
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      // 1 buusan tul toglogchiin eeljiig ene hesegt solij ugnu.

      switchToNextPlayer();
    }
  } else {
    alert("Game Over");
  }
});

// HOLD tovchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
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
    if (scores[activePlayer] >= 100) {
      //togloom duusgah
      isNewGame = false;

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
  } else {
    alert("game over");
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

// Shine togloom ehluuleh tovchnii eventlistener
document.querySelector(".btn-new").addEventListener("click", initGame);
