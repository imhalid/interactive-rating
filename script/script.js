const selectedNumber = document.querySelectorAll(".number");

const hangleSelect = (el) => {
  selectedNumber.forEach((item) => {
    item.classList.remove("selected");
  });
  el.classList.add("selected");
};

selectedNumber.forEach((item) => {
  item.addEventListener("click", (e) => {
    hangleSelect(e.target);
    console.log(e.target.innerHTML);
  });
});
