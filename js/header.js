// let header = document.querySelector("#header");
// header.addEventListener("mouseover", () => {
//     header.classList.add("navOver")
// });
// header.addEventListener("mouseout", () => {
//     header.classList.remove("navOver")
// });

// // -------------TEXT APPARAIT FUR ET A MESURE----------

// const titleElement = document.getElementById('animatedTitle');
// const text = "Bonjour et bienvenue sur mon Portfolio";

// function animateTitle() {
//     let index = 0;

//     function addLetter() {
//         titleElement.textContent = text.slice(0, index);
//         index++;

//         if (index <= text.length) {
//             setTimeout(addLetter, Math.floor(Math.random() * (150 - 80)) + 80) // Ajoute une lettre entre 150 et 80 miliseconde
//         } else {
//             // La boucle est terminé et on rappelle la fonction
//             setTimeout(() => {
//                 delLetter()
//             }, 1500);
//         }
//     }

//     function delLetter() {
//         titleElement.textContent = text.slice(0, index);
//         index--;

//         if (index >= 0) {
//             setTimeout(delLetter, Math.floor(Math.random() * (150 - 80)) + 80) // Ajoute une lettre entre 150 et 80 miliseconde
//         } else {
//             // La boucle est terminé et on rappelle la fonction animation
//             setTimeout(() => {
//                 index = 0;
//                 animateTitle();
//             }, 1500); // temps d'attente avant la répétition (en millisecondes)
//         }
//     }

//     addLetter();
// }

// animateTitle();

// Flip des cartes

document.addEventListener("DOMContentLoaded", function () {
    // Fonction pour inverser la carte
    function flipCard() {
      var card = this.querySelector(".interieur");
      card.style.transform = card.style.transform === "rotateY(180deg)" ? "rotateY(0deg)" : "rotateY(180deg)";
    }

    // Ajouter l'événement à chaque élément avec la classe fliprojet
    var flipElements = document.querySelectorAll(".fliprojet");
    flipElements.forEach(function (element) {
      element.addEventListener("mouseenter", flipCard);
      element.addEventListener("mouseleave", flipCard);
    });
  });