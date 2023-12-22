let header = document.querySelector("#header");
header.addEventListener("click", () => {
    header.classList.toggle("navOver")
});



// -------------TEXT APPARAIT FUR ET A MESURE----------
const titleElement = document.getElementById('animatedTitle');
        const text = "Bonjour et bienvenue sur mon Portfolio";

        function animateTitle() {
            let index = 0;

            function addLetter() {
                titleElement.textContent = text.slice(0, index);
                index++;

                if (index <= text.length) {
                    setTimeout(addLetter, Math.floor(Math.random() * (150 - 80 )) + 80) // ajustez la durée ici (en millisecondes)
                } else {
                    // La boucle est terminée, vous pouvez choisir de répéter ou faire autre chose ici
                    setTimeout(() => {
                        index = 0;
                        animateTitle();
                    }, 3000); // temps d'attente avant la répétition (en millisecondes)
                }
            }

            addLetter();
        }

        animateTitle();