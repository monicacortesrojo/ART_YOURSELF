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

            const matchPortrait = data.filter((portraits) => {
                currentGenre === portraits.genre &&
                    currentSkintone === portraits.skintone &&
                    currentFreckles === portraits.freckles &&
                    currentFaceshape === portraits.faceshape &&
                    currentEyeshape === portraits.eyeshape &&
                    currentEyescolor === portraits.eyescolor &&
                    currentEyebrows === portraits.eyebrows &&
                    currentNoseshape === portraits.noseshape &&
                    currentLips === portraits.lips &&
                    currentHaircolor === portraits.haircolor &&
                    currentHairstyle === portraits.hairstyle &&
                    currentZodiacsign === portraits.zodiacsign;
            });

            if (matchPortrait === true) {
                console.log(matchPortrait);
            }

            /*
                                                                       const portraitStructure = document.getElementById("portraitStructure");
                                                                       data.portraits.filter(
                                                                           (portrait) =>
                                                                           currentGenre === portrait.genre ||
                                                                           currentSkintone === portrait.skintone ||
                                                                           currentFreckles === portrait.freckles ||
                                                                           currentFaceshape === portrait.faceshape ||
                                                                           currentEyeshape === portrait.eyeshape ||
                                                                           currentEyescolor === portrait.eyescolor ||
                                                                           currentEyebrows === portrait.eyebrows ||
                                                                           currentNoseshape === portrait.noseshape ||
                                                                           currentLips === portrait.lips ||
                                                                           currentHaircolor === portrait.haircolor ||
                                                                           currentHairstyle === portrait.hairstyle ||
                                                                           currentZodiacsign === portrait.zodiacsign
                                                                       );
                                                                       const portraitImage = document.createElement("img");
                                                                       portraitImage.src = portrait.url;

                                                                       portraitStructure.appendChild(portraitImage);*/
        })
        .catch((error) => {
            console.error(error);
        });
};

getPortraits();