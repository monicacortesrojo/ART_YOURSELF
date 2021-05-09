answerStorage = window.localStorage;

const getPortraits = () => {
    const apiPortraits = "http://localhost:2021/api/portraits";

    const currentGenre = localStorage.getItem("genre");
    const currentSkintone = localStorage.getItem("skintone");
    const currentFreckles = localStorage.getItem("freckles");
    const currentFaceshape = localStorage.getItem("faceshape");
    const currentEyeshape = localStorage.getItem("eyeshape");
    const currentEyescolor = localStorage.getItem("eyescolor");
    const currentEyebrows = localStorage.getItem("eyebrows");
    const currentNoseshape = localStorage.getItem("noseshape");
    const currentLips = localStorage.getItem("lips");
    const currentHaircolor = localStorage.getItem("haircolor");
    const currentHairstyle = localStorage.getItem("hairstyle");
    const currentZodiacsign = localStorage.getItem("zodiacsign");

    fetch(apiPortraits)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            const matchPortrait = (portrait) => {
                if (
                    currentGenre === portrait.genre &&
                    currentSkintone === portrait.skintone &&
                    currentFreckles === portrait.freckles &&
                    currentFaceshape === portrait.faceshape &&
                    currentEyeshape === portrait.eyeshape &&
                    currentEyescolor === portrait.eyescolor &&
                    currentEyebrows === portrait.eyebrows &&
                    currentNoseshape === portrait.noseshape &&
                    currentLips === portrait.lips &&
                    currentHaircolor === portrait.haircolor &&
                    currentHairstyle === portrait.hairstyle &&
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

const restartQuestions = () => {
    localStorage.clear();
    location.href = "../test.html";
};