const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Portrait = require("./models/portraits");

const api = express();

// CONF CORS

api.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
    api.options("*", (req, res) => {
        res.header(
            "Access-Control-Allow-Methods",
            "GET, PATCH, PUT, POST, DELETE, OPTIONS"
        );
        res.send();
    });
});

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));

const urlApi = "mongodb://localhost/PORTRAITS";

mongoose.connect(
    urlApi, { useNewUrlParser: true, useUnifiedTopology: true },
    (error, response) => {
        if (error) {
            console.error(error, "Error al conectar con la base de datos PORTRAITS");
        } else {
            console.log("Base de datos conectada correctamente");
        }
    }
);

api.listen(2021);
console.log("API corriendo en puerto 2021");