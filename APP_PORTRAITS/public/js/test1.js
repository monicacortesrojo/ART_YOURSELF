answerStorage = window.localStorage;

const getQuestions = (id = 1) => {
    const apiQuestions = `http://localhost:2020/api/questions/${id}`;

    fetch(apiQuestions)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            //CREO ESTRUCTURA HTML

            const questionStructure = document.getElementById("questionStructure");
            questionStructure.innerHTML = "";

            //PINTO LAS PREGUNTAS

            data.forEach((questions) => {
                const questionNumber = document.createElement("h3");
                questionNumber.innerHTML = questions.id;
                questionNumber.className = "questionNumber";

                const questionTitle = document.createElement("h2");
                questionTitle.innerHTML = questions.title;
                questionTitle.className = "questionTitle";

                const answersGroup = document.createElement("ul");
                answersGroup.className = "list-group";

                //PINTO LAS RESPUESTAS

                questions.answers.forEach((answer) => {
                    const answerValue = document.createElement("li");
                    answerValue.innerHTML = answer;
                    answerValue.className = "list-group-item";

                    const answerRadio = document.createElement("input");
                    answerRadio.className = "form-check-input me-1";
                    answerRadio.value = answer;
                    answerRadio.type = "radio";
                    answerRadio.name = "answerValues";
                    answerRadio.required = true;
                    answerRadio.id = "answerRadio";

                    answerRadio.addEventListener("click", (event) => {
                        captureAnswer(event.target.answer);
                        document.getElementById("nextButton").disabled = false;
                    });

                    //LOCAL STORAGE

                    const captureAnswer = () => {
                        localStorage.setItem(questions.feature, answer);
                        console.log(localStorage);
                    };

                    answersGroup.appendChild(answerValue);
                    answerValue.appendChild(answerRadio);
                });

                //METO TODOS LOS ELEMENTOS DENTRO DE LA EXTRUCTURA

                //PINTO BOTONERA

                const buttonsGroup = document.createElement("div");
                buttonsGroup.className =
                    "d-grid gap-2 d-md-flex justify-content-md-end";

                //creo el botón previous
                const previousButton = document.createElement("button");
                previousButton.className = "btn btn-outline-light ";
                previousButton.type = "button";
                previousButton.innerText = "anterior";

                previousButton.addEventListener("click", (event) => {
                    getQuestions(
                        id > 1 ? (event.target.id = id - 1) : (event.target.id = id)
                    );
                });

                //creo el botón next
                const nextButton = document.createElement("button");
                nextButton.className = "btn btn-outline-light ";
                nextButton.type = "button";
                nextButton.innerText = "siguiente";
                nextButton.id = "nextButton";
                nextButton.disabled = true;

                nextButton.addEventListener("click", (event) => {
                    getQuestions(
                        id < 12 ?
                        (event.target.id = id + 1)(
                            (document.getElementById("endTest").hidden = true)
                        ) :
                        (questionStructure.innerHTML = ""),
                        (document.getElementById("endTest").hidden = false)
                    );
                });

                //creo el botón de reiniciar
                const restartButton = document.createElement("button");
                restartButton.className = "btn-sm btn btn-dark";
                restartButton.type = "button";
                restartButton.innerText = "reiniciar";
                restartButton.addEventListener("click", (event) => {
                    getQuestions(
                        id > 1 ?
                        ((event.target.id = 1), localStorage.clear()) :
                        localStorage.clear()
                    );
                });

                buttonsGroup.appendChild(restartButton);
                buttonsGroup.appendChild(previousButton);
                buttonsGroup.appendChild(nextButton);

                //meto todos los elementos en la estructura
                questionStructure.appendChild(questionNumber);
                questionStructure.appendChild(questionTitle);
                questionStructure.appendChild(answersGroup);
                questionStructure.appendChild(buttonsGroup);
            });
        })
        .catch((error) => {
            console.error(error);
        });
};

getQuestions();

const finalizeTest = () => {
    const endTest = document.getElementById("endTest");
    endTest.hidden = true;

    const spinner = document.createElement("div");
    spinner.className = "spinner-border";
    spinner.role = "status";

    const interactiveQuote = document.createElement("h1");

    setTimeout(function() {
        interactiveQuote.innerHTML = "Azúcar";
    }, 0);
    setTimeout(function() {
        interactiveQuote.innerHTML = "Especias";
    }, 1500);
    setTimeout(function() {
        interactiveQuote.innerHTML = "Y muchas cosas bonitas";
    }, 3000);

    endTest.appendChild(spinner);
    endTest.appendChild(interactiveQuote);
};

finalizeTest();