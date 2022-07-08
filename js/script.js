const epicMix = [
  "Welcome to My Life - Simple Plan",
  "Creep - Radiohead",
  "Candles - Hey Monday",
  "Final Masquerade - Linkin Park",
  "Cancer - My Chemical Romance",
  "I Don't Love You - My Chemical Romance",
  "cowboy like me - Taylor Swift",
  "Battle Scars - Lupe Fiasco, Guy Sebastian",
  "Sedetik Lebih - Anuar Zain",
  "童话 - Michael Wong",
  "Everything - The Black Skirts",
  "Soda - Nothing But Thieves"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixInfo(epicMix);
  mixList.classList.remove("hide");
  button.classList.add("hide");
});

total.innerText = `Top ${epicMix.length} Personal Favourite Songs!`;

const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};
