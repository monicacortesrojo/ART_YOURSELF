answerStorage = window.localStorage;

const initialTransition = () => {
    const transitionStructure = document.getElementById("transitionStructure");

    const interactiveQuote = document.createElement("h1");

    setTimeout(function() {
        interactiveQuote.innerHTML = "Azúcar";
    }, 0);
    setTimeout(function() {
        interactiveQuote.innerHTML = "Especias";
    }, 1000);
    setTimeout(function() {
        interactiveQuote.innerHTML = "Y muchas cosas bonitas";
    }, 2000);
    setTimeout(function() {
        interactiveQuote.style.visibility = "hidden";
        getPortraits();
    }, 3000);

    transitionStructure.appendChild(interactiveQuote);
};

initialTransition();

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

            const portraitImage = document.createElement("img");
            portraitImage.src = matchedPortrait[0].url;

            const downloadButton = document.createElement("a");
            downloadButton.innerText = "descarga tu retrato";
            downloadButton.href = matchedPortrait[0].url;
            downloadButton.download = true;

            portraitStructure.appendChild(portraitImage);
            portraitStructure.appendChild(downloadButton);
        })
        .catch((error) => {
            console.error(error);
        });
};