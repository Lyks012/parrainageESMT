let parrains = ["AAAAAAAA", "BBBBBBBB", "CCCCCC", "DDDDDDDD"];
let filleuls = [0, 1, 2, 3];
let isParrainSet = false;
let current;
const button = document.querySelector("button");

function getRandomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

function pickRandomPerson(currentClass) {
  const index = getRandomIndex(currentClass.length);
  return currentClass[index];
}

function displayParrainOrFilleul(location, currentClass) {
  current = pickRandomPerson(currentClass);
  document.getElementById(location).innerHTML = current;
}

function removePerson(currentClass, current) {
  currentClass.splice(currentClass.indexOf(current), 1);
  isParrainSet = !isParrainSet;
}

function matchUp() {
  let paragraph, currentArray;

  if (isParrainSet) {
    paragraph = "filleul";
    currentArray = filleuls;
  } else {
    paragraph = "parrain";
    currentArray = parrains;
  }
  document.getElementById(paragraph).style.fontSize = "150%";

  let repetition = 0;
  button.disabled = true;
  let animation = setInterval(function () {
    displayParrainOrFilleul(paragraph, currentArray);
    repetition++;
    if (repetition == 20) {
      button.disabled = false;
      document.getElementById(paragraph).style.fontSize = "300%";
      removePerson(currentArray, current);
      clearInterval(animation);
    }
  }, 100);
}
