const { apiInit } = require("./apiConf/apiConf");
const mongoose = require("mongoose");
const Order = require("./models/orders");

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

api.post("/api/orders", (request, response) => {
    const newOrder = new Order({
        name: request.body.name,
        surname: request.body.surname,
        email: request.body.email,
        description: request.body.description,
        imgUrl: request.body.imgUrl,
        finalized: request.body.finalized,
    });

    newOrder.save((error) => {
        if (error) {
            console.error(error);
        } else {
            response.send({
                success: true,
                message: "Pedido realizado correctamente",
                newOrder,
            });
        }
    });
});

const PORT = 2023;
api.listen(PORT);
console.log("API corriendo en puerto 2023");