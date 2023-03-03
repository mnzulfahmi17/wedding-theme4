// Hamburger Button
const btnHamburger = document.getElementById("menu-btn");

const menu = document.getElementById("menu");

btnHamburger.addEventListener("click", navToggle);

function navToggle() {
  btnHamburger.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

// Carousel
document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
    <div class="carousel__nav">
        ${buttonsHtml.join("")}
    </div>
`
  );

  const buttons = carousel.querySelectorAll(".carousel__button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );

      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");
    });
  });

  // Select the first item on page load
  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");
});

// Scroll Trigger Navbar
var x = window.matchMedia("(max-width: 768px)");
x.addListener(scrollFunction); // Attach listener function on state changes
window.onscroll = function () {
  scrollFunction(x);
};

function scrollFunction(x) {
  if (
    document.body.scrollTop > 80 ||
    document.documentElement.scrollTop > 80 ||
    x.matches
  ) {
    document.getElementById("navbar").style.opacity = "1";
    document.getElementById("navbar").style.background = "";
    document.getElementById("navbar").style.transition = "0.5s";
  } else {
    document.getElementById("navbar").style.background = "transparent";
    document.getElementById("navbar").style.transition = "0.5s";
  }
}

const overlay = document.getElementById("overlay");
const bodyInvitation = document.getElementById("body-invitation");
const btn = document.getElementById("open-invitation");
btn.addEventListener("click", function () {
  overlay.classList.add("animate-openInvitation");
  bodyInvitation.classList.remove("hidden");
  btn.remove();
});
