// projekt 24, https://www.youtube.com/watch?v=NfvtQ2p5QG4&t=37539s
const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");

console.log(navbarEl.offsetHeight);

console.log(bottomContainerEl.offsetTop);

window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});

// window.scrollY → kolik pixelů už uživatel odskroloval odshora

// bottomContainerEl.offsetTop → kolik pixelů je „bottom-container“ odshora stránky

// navbarEl.offsetHeight → výška navigace

// - 50 → malá mezera navíc (např. na efekt)
