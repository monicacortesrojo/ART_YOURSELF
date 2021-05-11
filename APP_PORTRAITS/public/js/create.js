answerStorage = window.localStorage;

//Lógica del formulario

const getQuestions = (id = 1) => {
    const apiQuestions = `http://localhost:2020/api/questions/${id}`;

    fetch(apiQuestions)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            const questionStructure = document.getElementById("questionStructure");
            questionStructure.innerHTML = "";

            data.forEach((questions) => {
                const questionNumber = document.createElement("h3");
                questionNumber.innerHTML = questions.id;
                questionNumber.className = "question-number";

                const questionTitle = document.createElement("h2");
                questionTitle.innerHTML = questions.title;
                questionTitle.className = "question-title";

                const answerContainer = document.createElement("div");
                answerContainer.className = "answer-container";

                const answersGroup = document.createElement("ul");
                answersGroup.className = "list-group";

                questions.answers.forEach((answer) => {
                    const answerValue = document.createElement("li");

                    const answerRadio = document.createElement("input");
                    answerRadio.className = "form-check-input me-1";
                    answerRadio.value = answer;
                    answerRadio.type = "radio";
                    answerRadio.name = "answerValues";
                    answerRadio.required = true;
                    answerRadio.id = `${answer}Radio`;
                    answerRadio.style.display = "none";

                    const answerLabel = document.createElement("label");
                    answerLabel.htmlFor = `${answer}Radio`;
                    answerLabel.innerHTML = answer;
                    answerLabel.className = "listitem";

                    answerRadio.addEventListener("click", (event) => {
                        captureAnswer(event.target.answer);
                        document.getElementById("nextButton").disabled = false;
                    });

                    const captureAnswer = () => {
                        localStorage.setItem(questions.feature, answer);
                        console.log(localStorage);
                    };

                    answerContainer.appendChild(answersGroup);
                    answersGroup.appendChild(answerValue);
                    answerValue.appendChild(answerRadio);
                    answerValue.appendChild(answerLabel);
                });

                const buttonsGroup = document.createElement("div");
                buttonsGroup.className =
                    "d-grid gap-2 d-md-flex justify-content-md-end";
                buttonsGroup.id = "buttonsGroup";

                //creo el botón previous
                const previousButton = document.createElement("button");
                previousButton.className = "smbtn prev";
                previousButton.type = "button";
                previousButton.innerText = "anterior";

                previousButton.addEventListener("click", (event) => {
                    getQuestions(
                        id > 1 ? (event.target.id = id - 1) : (event.target.id = id)
                    );
                });

                const nextButton = document.createElement("button");
                nextButton.className = "smbtn next";
                nextButton.type = "button";
                nextButton.innerText = "siguiente";
                nextButton.id = "nextButton";
                nextButton.disabled = true;

                nextButton.addEventListener("click", (event) => {
                    getQuestions(
                        id < 12 ?
                        (event.target.id = id + 1) :
                        (location.href = "../buy.html")
                    );
                });

                if (id === 12) {
                    nextButton.innerText = "finalizar";
                }

                const restartButton = document.createElement("button");
                restartButton.className = "smbtn restart";
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

                questionStructure.appendChild(questionNumber);
                questionStructure.appendChild(questionTitle);
                questionStructure.appendChild(answerContainer);
                questionStructure.appendChild(buttonsGroup);
            });
        })
        .catch((error) => {
            console.error(error);
        });
};

getQuestions();