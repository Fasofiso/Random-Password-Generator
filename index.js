const rectangle1 = document.getElementById("rectangle1");
const rectangle2 = document.getElementById("rectangle2");
const rectangle3 = document.getElementById("rectangle3");
const rectangle4 = document.getElementById("rectangle4");

const inputLength = document.getElementById("lengthInput");

const characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "!",
  "@",
  "<",
  ">",
  "#",
  "$",
  "%",
  "&",
  "?",
  "*",
];

let passwordLength = 10;

function changePasswordLength(event) {
  if (event.target.value < 10) {
    inputLength.value = 10;
  } else if (event.target.value > 20) {
    inputLength.value = 20;
  }
  passwordLength = event.target.value;
}

function generatePassword() {
  let password = "";
  for (let i = 0; i < passwordLength * 4; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  rectangle1.textContent = password.substring(0, passwordLength);
  rectangle2.textContent = password.substring(
    passwordLength,
    passwordLength * 2
  );
  rectangle3.textContent = password.substring(
    passwordLength * 2,
    passwordLength * 3
  );
  rectangle4.textContent = password.substring(
    passwordLength * 3,
    passwordLength * 4
  );
}

function copyToClipboard(rectangle) {
  let rectangleElement;
  if (rectangle === "1") {
    rectangleElement = rectangle1;
  }
  if (rectangle === "2") {
    rectangleElement = rectangle2;
  }
  if (rectangle === "3") {
    rectangleElement = rectangle3;
  } else {
    rectangleElement = rectangle4;
  }
  navigator.clipboard.writeText(rectangleElement.textContent);
  alert(
    "Password " +
      rectangleElement.textContent +
      " has been copied to the clipboard."
  );
}
