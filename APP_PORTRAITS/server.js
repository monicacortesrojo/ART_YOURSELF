const express = require("express");
const app = express();
const fs = require("fs");
const formidable = require("formidable");

app.use(express.static(__dirname + "/public"));

app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));

app.use(express.static(__dirname + "/public/html", { extensions: ["html"] }));

app.post("/uploadFile", (request, response) => {
    const form = new formidable.IncomingForm();
    form.parse(request);
    form.on("fileBegin", (name, file) => {
        file.path = __dirname + "/public/img/" + file.name;
    });
    form.on("file", (name, file) => {
        console.log("Uploaded" + file.name);
    });
    form.on("end", () => {
        console.log("subida finalizada");
    });
});

app.get("/api/img", (request, response) => {
    fs.readdir("public/img", (error, data) => {
        if (error) throw error;
        response.status(200).send({
            success: true,
            url: "/api/img",
            img: data,
            method: "GET",
        });
    });
});

const PORT = process.env.PORT || 2022;
app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto 2022");
});