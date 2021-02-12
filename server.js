console.log("server code running");

const express = require("express");
const fs = require("fs");
const date = require("date-and-time");

const app = express();

const port = process.env.PORT || 8080;

const infoFile = fs.readFileSync("./Data/info.json");
const parsedData = JSON.parse(infoFile);

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "index/html");
});

app.post("/dryfood", (req, res) => {
    let clickTime = date.format(new Date(), "ddd, MMM DD YYYY at hh:mm A");
    parsedData.DryFood = clickTime;
    let editedData = JSON.stringify(parsedData, null, 2);
    fs.writeFileSync("./Data/info.json", editedData);
    res.sendStatus(201);
});

app.post("/wetfood", (req, res) => {
    let clickTime = date.format(new Date(), "ddd, MMM DD YYYY at hh:mm A");
    parsedData.WetFood = clickTime;
    let editedData = JSON.stringify(parsedData, null, 2);
    fs.writeFileSync("./Data/info.json", editedData);
    res.sendStatus(201);
});

app.get("/totals", (req, res) => {
    res.send(parsedData);
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
