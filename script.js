// const proprietaire = {
//     nom: "Dupont",
//     prenom: "Jean",
//     majeur: true,
// };

// const voiture = {
//     nombreDeRoues : 4,
//     couleur : "rouge",
//     option : ["climatisation", "GPS", "siège chauffant"],
//     proprietaire,
//     demarrer: demarrer,
//  }

// console.log(voiture.proprietaire.nom);
// voiture.demarrer();

// function demarrer() {
//     console.log("La voiture démarre");
// }

const buttonEl = document.querySelector("button[name='generate']");
const buttonCopy = document.querySelector("button[name='copy']");
const PasswordEl = document.querySelector("input[name='password']");
const longueurRangeEl = document.querySelector("input[name='pwdLengthSlider']");
const longueurInputEl = document.querySelector("input[name='pwdLengthIn']");
const errorMsgEl = document.querySelector("#error-msg");
const majList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const minList = "abcdefghijklmnopqrstuvwxyz";
const chiffreList = "0123456789";
const specialList = "!@#$%^&*()_+[]{}|;:,.<>?";
// console.log(majList[12]);

// On renvoie un nombre aléatoire entre une valeur min (incluse)
// et une valeur max (exclue)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function generate() {
  const maj = document.querySelector("input[name='maj']").checked;
  const chiffre = document.querySelector("input[name='chiffres']").checked;
  const special = document.querySelector("input[name='speciaux']").checked;
  let newPwd = "";
  let availableDict = "abcdefghijklmnopqrstuvwxyz";
  if (maj) {
    availableDict = availableDict + majList;
  }
  if (chiffre) {
    availableDict = availableDict + chiffreList;
  }
  if (special) {
    availableDict = availableDict + specialList;
  }
  console.log(availableDict);

  const longueur = document.querySelector(
    "input[name='pwdLengthSlider']"
  ).value;
  console.log(maj, chiffre, special, longueur);

  for (let pas = 0; pas < longueur; pas++) {
    // Ceci sera exécuté 5 fois
    // À chaque éxécution, la variable "pas" augmentera de 1
    // Lorsque'elle sera arrivée à 5, le boucle se terminera.
    newPwd =
      newPwd +
      availableDict[getRandomArbitrary(0, availableDict.length - 1) | 0];
    PasswordEl.value = newPwd;
  }
}

buttonCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(
    document.querySelector("input[name='password']").value
  );
});
buttonEl.addEventListener("click", generate);

longueurRangeEl.addEventListener("change", onSliderChange);
longueurInputEl.addEventListener("change", onNumberChange);

function onSliderChange(event) {
  longueurInputEl.value = event.target.value;
}

function onNumberChange(event) {
  longueurRangeEl.value = event.target.value;
  isRangeValid(longueurInputEl.value);
}

function isRangeValid(value) {
  if (value >= 4 && value <= 30) {
    errorMsgEl.innerText = "";
  } else {
    errorMsgEl.innerText = "La longueur doit être comprise entre 4 et 30 😠";
  }
}

// value <= 4 X
// value >= 30 X
