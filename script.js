"use strict";
let saving = 2000;
let highscore = 0;
let password = 1234;
let withdrawlMoney = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const d = new Date();
let time = d.toLocaleString("en-GB");
document.getElementById("time").innerHTML = time;
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  //console.log(guess, typeof guess);
  if (!guess) {
    displayMessage("⛔No Password!");
  } //when player wins
  else if (guess === password) {
    displayMessage("Correct Password!");
    document.querySelector(".saving").textContent = saving;
    document.getElementById("password1").value = "";
    document.querySelector(".btn").textContent = "Amount to withdrawl?";
    document.getElementById("password1").type = "text";
    document.querySelector(".guess").textContent = "";
    document.querySelector("body").style.backgroundColor = "rgb(93, 93, 139)";
  } else if (guess !== password) {
    if (document.getElementById("password1").type == "password") {
      displayMessage("❌ Try again!");
      document.getElementById("password1").value = "";
    } else {
      withdrawlMoney = Number(document.querySelector(".guess").value);
      console.log(typeof withdrawlMoney);
      console.log(withdrawlMoney);
      if (withdrawlMoney <= saving) {
        saving -= withdrawlMoney;
        console.log(saving);
        displayMessage("Withdrawing money...💷");
        document.querySelector(".saving").textContent = saving;
      } else {
        displayMessage("Sorry, you do not have enough money! ");
      }
    }
  }
});
