let count = 0;
const navHeart = document.getElementById("heart-btn");
const hearts = document.querySelectorAll("#heart-icon");

function heards() {
  count++;
  navHeart.innerText = count;
}

for (let i = 0; i < hearts.length; i++) {
  hearts[i].onclick = heards;
}
