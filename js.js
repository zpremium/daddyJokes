const button = document.querySelector(".center-div button");
const jokeText = document.querySelector(".center-div p");
document.addEventListener("DOMContentLoaded", getJoke); //al recargar pagina que me sale directamente un chiste y no el lorem

button.addEventListener("click", getJoke);

async function getJoke() {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const jokeObj = await jokeData.json();
  jokeText.innerHTML = jokeObj.joke;
}
