const selectedNumber = document.querySelectorAll(".number");
const submitButton = document.querySelector("#submit");
const main = document.querySelector(".main");
const thankYou = document.querySelector(".thankYou");
const point = document.querySelector("#point");

const hangleSelect = (el) => {
  selectedNumber.forEach((item) => {
    item.classList.remove("selected");
  });
  el.classList.add("selected");
};

let selectedNowNumber = 0;

selectedNumber.forEach((item) => {
  item.addEventListener("click", (e) => {
    hangleSelect(e.target);
    selectedNowNumber = e.target.innerHTML;
    // console.log(selectedNowNumber);
  });
});

submitButton.addEventListener("click", () => {
  main.style.display = "none";
  thankYou.style.display = "flex";
  point.innerHTML = selectedNowNumber;
  console.log(selectedNowNumber);
});
