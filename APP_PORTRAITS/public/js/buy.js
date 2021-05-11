answerStorage = window.localStorage;

//Función para encontrar el retrato en mi base de datos que coincida con las características del usuario
const getPortraits = () => {
    const apiPortraits = "http://localhost:2021/api/portraits";

    const currentSkintone = localStorage.getItem("skintone");
    const currentFreckles = localStorage.getItem("freckles");
    const currentEyescolor = localStorage.getItem("eyescolor");
    const currentHaircolor = localStorage.getItem("haircolor");
    const currentZodiacsign = localStorage.getItem("zodiacsign");

    fetch(apiPortraits)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            const matchPortrait = (portrait) => {
                if (
                    currentSkintone === portrait.skintone &&
                    currentFreckles === portrait.freckles &&
                    currentEyescolor === portrait.eyescolor &&
                    currentHaircolor === portrait.haircolor &&
                    currentZodiacsign === portrait.zodiacsign
                ) {
                    return true;
                } else {
                    return false;
                }
            };

            const matchedPortrait = data.filter(matchPortrait);
            console.log(matchedPortrait);

            const portraitStructure = document.getElementById("portraitStructure");
            portraitStructure.innerHTML = "";

            const cardPortrait = document.createElement("div");
            cardPortrait.className = "card";

            const portraitImage = document.createElement("img");
            portraitImage.src = matchedPortrait[0].url;

            portraitStructure.appendChild(cardPortrait);
            cardPortrait.appendChild(portraitImage);
        })
        .catch((error) => {
            console.error(error);
        });
};

getPortraits();

//Función para reiniciar test
const restartQuestions = () => {
    localStorage.clear();
    location.href = "../create.html";
};