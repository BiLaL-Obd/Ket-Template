let portfolios = document.querySelectorAll(".portfolio ul li");
let imgs = document.querySelectorAll(".portfolio .imgs .box");

portfolios.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manaImage);
});

function removeActive() {
  portfolios.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function manaImage() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document
    .querySelectorAll(this.dataset.img)
    .forEach((el) => (el.style.display = "block"));
}
