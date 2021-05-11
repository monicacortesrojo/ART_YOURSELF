// Creo animación de la home

const homeAnimation = () => {
    const mainContainer = document.getElementById("mainContainer");
    const mainAnimation = document.createElement("img");
    mainAnimation.src = "../img/iconografia/eye.svg";
    mainAnimation.className = "main-animation";

    const mainText = document.createElement("p");
    mainText.innerText =
        "Crea tu retrato en menos de 5 minutos\ngracias a la magia de ArtYourself";
    mainText.className = "lead";
    mainText.id = "main-text";

    const mainButton = document.createElement("a");
    mainButton.className = "mainbtn";
    mainButton.innerText = "empezar";
    mainButton.href = "../create.html";

    mainContainer.appendChild(mainAnimation);
    setTimeout(function() {
        mainAnimation.src = "../img/iconografia/lips.svg";
    }, 1000);
    setTimeout(function() {
        mainAnimation.src = "../img/iconografia/hand.svg";
    }, 2000);
    setTimeout(function() {
        mainAnimation.src = "../img/iconografia/logo.svg";
        mainContainer.appendChild(mainText);
        mainContainer.appendChild(mainButton);
    }, 3000);
};

homeAnimation();