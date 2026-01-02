function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "This will be the poem",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElemement = document.querySelector("#poem-generator-form");
poemFormElemement.addEventListener("submit", generatePoem);
