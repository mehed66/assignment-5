let count = 0;
let navcount = 0;
const navHeart = document.getElementById("heart-btn");
const hearts = document.querySelectorAll("#heart-icon");
function heards() {
  count++;
  navHeart.innerText = count;
}
function copys() {
  count++;
  navHeart.innerText = count;
}

for (let i = 0; i < hearts.length; i++) {
  hearts[i].onclick = heards;
}

function getElement(id) {
  return document.getElementById(id);
}
function getTextNumber(id) {
  return parseInt(document.getElementById(id).innerText);
}
function setNumber(value, id) {
  document.getElementById(id).innerText = value;
}
function setCoinNumber() {
  const coinNumber = getTextNumber("coin-text") - 20;
  setNumber(coinNumber, "coin-text");
}
let historyArray = [];
const callBtns = document.getElementsByClassName("call-btn");
for (let callButton of callBtns) {
  callButton.addEventListener("click", function () {
    if (getTextNumber("coin-text") > 0) {
      const departTitle =
        callButton.parentNode.parentNode.children[1].innerText;
      const departmentNumber =
        callButton.parentNode.parentNode.children[3].innerText;
      alert(`${departTitle}, ${departmentNumber}`);
      setCoinNumber();
      const history = {
        name: departTitle,
        number: departmentNumber,
        time: new Date().toLocaleTimeString(),
      };
      historyArray.push(history);
      renderHistory();
    } else {
      alert("❌ আপনার কয়েন শেষ হয়ে গেছে!");
    }
  });
}
document.querySelectorAll(".copy-button").forEach(function (button) {
  button.addEventListener("click", function () {
    const navCopyBtn = Number(
    document.getElementById("nav-copy-btn").innerText);
    let total = navCopyBtn + 1;

    const parentCard = this.closest(".p-8");
    const numberElement = parentCard.querySelector(".depart-number");
    const number = numberElement.innerText;
    navigator.clipboard
      .writeText(number)
      .catch((err) => console.error("Failed to copy:", err));
    document.getElementById("nav-copy-btn").innerText = total;
  });
});

function renderHistory() {
  const callAddSecton = getElement("call-add-secton");
  callAddSecton.innerHTML = "";

  for (const h of historyArray) {
    const newCallHistory = document.createElement("div");
    newCallHistory.innerHTML = `
    <div class="bg-gray-100 m-2 p-2 rounded-xl flex justify-between items-center">
      <div>
        <h2 class="sm:text-[16px] lg:text-[16px] font-bold">${h.name}</h2>
        <p class="text-gray-500 text-[16px]">${h.number}</p>
      </div>
      <div>
        <p class="text-gray-700 text-[12px]">${h.time}</p>
      </div>
    </div>
  `;
    callAddSecton.appendChild(newCallHistory);
  }
}
getElement("history-clear-btn").addEventListener("click", function () {
  const callAddSecton = getElement("call-add-secton");
  callAddSecton.innerHTML = "";
  historyArray = [];
});
