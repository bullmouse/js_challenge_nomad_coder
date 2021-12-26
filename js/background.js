const background = document.querySelector(".background");
const howManyBackgrounds = 6;
const chosenBackground = `../img/background_image/${Math.floor(
  Math.random() * howManyBackgrounds
)}.jpeg`;

background.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${chosenBackground})`;
