const { apiInit } = require("./configuration/apiConf");
const mongoose = require("mongoose");
const Portraits = require("./models/portraits");

const api = apiInit();

const mongoURL =
    "mongodb+srv://monicacortesrojo:monicacortesrojo@cluster0.cvptt.mongodb.net/BBDD?retryWrites=true&w=majority";

mongoose.connect(
    mongoURL, { useNewUrlParser: true, useUnifiedTopology: true },
    (error, response) => {
        if (error) {
            console.error(error, "Error al conectar con la base de datos PORTRAITS");
        } else {
            console.log("Base de datos conectada correctamente");
        }
    }
);

api.get("/api/portraits", (request, response) => {
    Portraits.find((error, data) => {
        if (error) {
            console.error(error);
        } else {
            response.send(data);
        }
    });
});

/*

api.get("/api/portraits", (request, response) => {
    Portraits.findOne({
            genre: request.body.genre,
            skintone: request.body.skintone,
            freckles: request.body.freckles,
            faceshape: request.body.faceshape,
            eyeshape: request.body.eyeshape,
            eyescolor: request.body.eyescolor,
            eyebrows: request.body.eyebrows,
            noseshape: request.body.noseshape,
            lips: request.body.lips,
            haircolor: request.body.haircolor,
            hairstyle: request.body.hairstyle,
            zodiacsign: request.body.zodiacsign,
        },
        (error, data) => {
            if (error) {
                console.error(error);
            } else {
                response.send(data);
            }
        }
    );
});*/

const PORT = 2021;
api.listen(PORT);
console.log(`API corriendo en puerto ${PORT}`);