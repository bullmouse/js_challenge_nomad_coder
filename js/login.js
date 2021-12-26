const USERNAME = "username";
const btn = document.querySelector(".login-answer__button");
const loginInput = document.querySelector("#login-answer__input");
const loginArea = document.querySelector(".login");
const mainArea = document.querySelector(".main");
const mainTitleArea = document.querySelector(".main-title");
let mainTitleAreaH2;
let loginValue;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  loginValue = loginInput.value;
  if (!loginValue) alert("Please type your username or ID ;)");
  else {
    mainTitleAreaH2 = document.createElement("h1");
    loginArea.classList.add("hidden");
    localStorage.setItem(USERNAME, loginValue);
    mainTitleAreaH2.innerText = `Nice to meet you ${loginValue}!`;
    mainTitleArea.appendChild(mainTitleAreaH2);
    mainArea.classList.remove("hidden");
  }
});
