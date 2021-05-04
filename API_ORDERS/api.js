const { apiInit } = require("./apiConf/apiConf");
const mongoose = require("mongoose");
const Orders = require("./models/orders");
const formidable = require("formidable");

const api = apiInit();

const mongoURL =
    "mongodb+srv://monicacortesrojo:monicacortesrojo@cluster0.cvptt.mongodb.net/BBDD?retryWrites=true&w=majority";

mongoose.connect(
    mongoURL, { useNewUrlParser: true, useUnifiedTopology: true },
    (error, response) => {
        if (error) {
            console.error(error, "Error al conectar con la base de datos ORDERS");
        } else {
            console.log("Base de datos conectada correctamente");
        }
    }
);

api.get("/api/orders", (request, response) => {
    Orders.find((error, data) => {
        if (error) {
            console.error(error);
        } else {
            response.send(data);
        }
    });
});

api.post("/api/orders", (request, response) => {
    const orderForm = new formidable.IncomingForm();
    orderForm.parse(request);

    orderForm.on("fileBegin", (name, file) => {
        file.path = __dirname + "/public/img" + file.name;
    });

    orderForm.on("file", (name, file) => {
        console.log("Uploaded" + file.name);
    });

    const newOrder = new Orders({
        name: request.body.name,
        surname: request.body.surname,
        email: request.body.email,
        description: request.body.description,
        url: request.body.description,
    });

    newOrder.save((error) => {
        if (error) {
            console.error(error);
        } else {
            response.send({
                success: true,
                message: "Order añadida correctamente",
                newOrder,
            });
        }
    });
});

const PORT = 2023;
api.listen(PORT);
console.log(`API ORDERS corriendo en puerto ${PORT}`);