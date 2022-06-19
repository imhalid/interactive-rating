const selectedNumber = document.querySelectorAll(".number");
const submitButton = document.querySelector("#submit");

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
  console.log(selectedNowNumber);
});
