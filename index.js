let rectangle1 = document.getElementById("rectangle1");
let rectangle2 = document.getElementById("rectangle2");
let rectangle3 = document.getElementById("rectangle3");
let rectangle4 = document.getElementById("rectangle4");

let characters = [
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

function generate() {
  let password = "";
  for (let i = 0; i < 41; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  rectangle1.textContent = password.substring(0, 11);
  rectangle2.textContent = password.substring(11, 21);
  rectangle3.textContent = password.substring(21, 31);
  rectangle4.textContent = password.substring(31, 41);
}
