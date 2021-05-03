const getQuestions = (number = 1) => {
const urlApi = `http://localhost:2020/api/questions/${number}`;
//api/questions/`${number}`
//cambiar el page por el question.number, el boton de adelante es number + 1 y el para atras -1
//no dejar presionar next hasta que no esten los radios marcados
//no dejar ir para atrás en el primero
//en la question.number = 11 será finalizar

//darle al radio un evento addEventListener, cuando presione el radio seleccionado
//guardar la info en el localstorage o cookie, pero mejor localstorage
//tengo que guardar pregunta y respuesta de todas las features
//cuando de a finalizar mandamos todo lo del localstorage para que matche con los features
//el boton finalizar debe tener otro evento que llame a la api portraits y haga el post, pasando lo guardado en el localstorage
//cuando se finalice borrar el cuestionario y mostrar la img sola,, con boton de descargar y ya esta
//hacer un post de la api.portraits que me saque la url
