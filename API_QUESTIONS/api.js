const { apiInit } = require("./configuration/apiConf");
const mongoose = require("mongoose");
const Questions = require("./models/questions");

const api = apiInit();

const mongoURL =
    "mongodb+srv://monicacortesrojo:monicacortesrojo@cluster0.cvptt.mongodb.net/BBDD?retryWrites=true&w=majority";

mongoose.connect(
    mongoURL, { useNewUrlParser: true, useUnifiedTopology: true },
    (error, response) => {
        if (error) {
            console.error(error, "Error al conectar con la base de datos QUESTIONS");
        } else {
            console.log("Base de datos conectada correctamente");
        }
    }
);

api.get("/api/questions/:id", (request, response) => {
    Questions.find({ id: request.params.id }, (error, data) => {
        if (error) {
            console.error(error);
        } else {
            response.send(data);
        }
    });
});

const PORT = 2020;
api.listen(PORT);
console.log("API corriendo en puerto 2020");