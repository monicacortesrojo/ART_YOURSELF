const express = require("express");
const bodyParser = require("body-parser");

const apiInit = () => {
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

    return api;
};

module.exports = {
    apiInit: apiInit,
};