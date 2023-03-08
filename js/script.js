// Scroll

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    // var revealpoint = 150;
    if (revealtop < windowheight) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Hamburger Button
const btnHamburger = document.getElementById("menu-btn");

const menu = document.getElementById("menu");

btnHamburger.addEventListener("click", navToggle);

function navToggle() {
  btnHamburger.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

// // Carousel
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

// Open Page
const overlay = document.getElementById("overlay");
const bodyInvitation = document.getElementById("body-invitation");
const btnOpen = document.getElementById("open-invitation");
btnOpen.addEventListener("click", openPage);

function openPage() {
  overlay.classList.add("animate-openInvitation");
  bodyInvitation.classList.remove("hidden");
  btnOpen.remove();
}
